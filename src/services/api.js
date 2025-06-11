import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { checkFirstLaunch } from "../breast-cancer/onboarding/OnboardingManager";

// Environment-specific configuration
const ENV = {
  dev: {
    // Use localhost for emulators, use your machine's actual IP for physical devices
    // 10.0.2.2 is the special IP for Android emulators to reach host machine
    // For iOS simulator, localhost works fine
    baseURL:
      Platform.OS === "android" && !__DEV__
        ? "https://api.tellyoudoc.com/api/v1" // For Android emulator
        : Platform.select({
            ios: "https://api.tellyoudoc.com/api/v1", // For iOS simulator
            android: "http://172.16.14.75:3000/api/v1", // Use your actual IP address here
          }),
  },
  prod: {
    baseURL: "https://api.tellyoudoc.com/api/v1", // Production URL
  },
};

// Use development environment when running locally
const environment = __DEV__ ? ENV.dev : ENV.prod;

console.log("API Base URL:", environment.baseURL);
console.log("Platform:", Platform.OS);
console.log("Is iOS:", Platform.OS === "ios");
console.log("Is Android:", Platform.OS === "android");
console.log("Is Physical Device:", Platform.OS === "android" && __DEV__);

// Create API client instance
export const apiClient = axios.create({
  baseURL: environment.baseURL,
  timeout: 15000, // 15 seconds timeout
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Platform: Platform.OS,
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  async (config) => {
    // Add authentication token to headers if available
    try {
      const token = await AsyncStorage.getItem("AccessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      console.error("Error in request interceptor:", error);
      return config;
    }
  },
  (error) => {
    console.error("Request interceptor error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Success handler
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Handle token refresh for 401 errors (if needed)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt to refresh token
        const refreshToken = await AsyncStorage.getItem("RefreshToken");
        if (refreshToken) {
          // Call refresh token endpoint
          const response = await axios.post(
            `${environment.baseURL}/auth/refresh`,
            { refreshToken }
          );

          // Save new tokens
          await AsyncStorage.setItem("AccessToken", response.data.accessToken);
          await AsyncStorage.setItem(
            "RefreshToken",
            response.data.refreshToken
          );

          // Retry the original request with new token
          originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
          return apiClient(originalRequest);
        }
      } catch (refreshError) {
        // If refresh fails, redirect to login
        // TODO: You would implement this by dispatching a logout action or similar
        console.error("Error refreshing token:", refreshError);
      }
    }

    // TODO: Transform error for consistent handling
    const errorResponse = {
      status: error.response?.status || 0,
      message:
        error.response?.data?.message ||
        error.message ||
        "Unknown error occurred",
      data: error.response?.data || null,
      originalError: error,
    };

    return Promise.reject(errorResponse);
  }
);

// Handle token expiration - log out the user
const handleTokenExpiration = async () => {
  try {
    await AsyncStorage.removeItem("AccessToken");
    await AsyncStorage.removeItem("AsUser");
    // You can add navigation to the login screen here if needed
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

// API service methods
const apiService = {
  // Auth endpoints
  auth: {
    login: (data) => apiClient.post("/users/login", data),
    register: (data) => apiClient.post("/users/register", data),
    forgotPassword: (email) =>
      apiClient.post("/users/forgot-password", { email }),
    resetPassword: (data) => apiClient.post("/users/reset-password", data),
    logout: () => apiClient.post("/users/logout"),
    refreshToken: (refreshToken) =>
      apiClient.post("/auth/refresh", { refreshToken }),
    verifyOTP: (otpData) => apiClient.post("/auth/verify-otp-patient", otpData),
    resendOTP: (countryCode, phoneNumber) =>
      apiClient.post("/auth/generate-otp", { countryCode, phoneNumber }),
  },

  // User profile endpoints
  profile: {
    getProfile: () => apiClient.get("/patient/profile"),
    updateProfile: (data) => apiClient.patch("/patient/profile", data),
    updateProfileImage: (formData) =>
      apiClient.patch("/patient/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    updateAddress: (data) => apiClient.patch("/patient/profile", data),
    updateContact: (data) => apiClient.patch("/patient/profile", data),
    // Saved Doctors
    saveDoctor: (doctorUDI_id) =>
      apiClient.post("/patient/save-doctor", { doctorUDI_id }),
    removeDoctor: (doctorId) =>
      apiClient.post(`/patient/remove-doctor`, { doctorId }),
    getDoctors: () => apiClient.get("/patient/saved-doctors"),
    createProfile: (data) =>
      apiClient.post("/patient/create-profile", data, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
  },

  // Health records endpoints
  healthRecords: {
    getPrescriptions: (doctorId) =>
      apiClient.get(`/patient/prescriptions?doctorId=${doctorId}`),
    getReports: (doctorId) =>
      apiClient.get(`/patient/reports?doctorId=${doctorId}`),
    getNotes: (doctorId) => apiClient.get(`/notes?doctorId=${doctorId}`),
    uploadPrescription: (formData) =>
      apiClient.post("/patient/prescription", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    uploadReport: (formData) =>
      apiClient.post("/patient/report", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    createNote: (data) => apiClient.post("/health-records/notes", data),
    updateNote: (id, data) =>
      apiClient.put(`/health-records/notes/${id}`, data),
    deleteNote: (id) => apiClient.delete(`/health-records/notes/${id}`),
    getRecords: (params) => apiClient.get("/health-records", { params }),
    getRecordById: (id) => apiClient.get(`/health-records/${id}`),
    uploadRecord: (formData) =>
      apiClient.post("/health-records", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    updateRecord: (id, recordData) =>
      apiClient.put(`/health-records/${id}`, recordData),
    deleteRecord: (id) => apiClient.delete(`/health-records/${id}`),

    // Delete report
    deleteReport: (id) =>
      apiClient.delete(`/patient/report/delete?reportId=${id}`),

    // deleteSpecificReport
    deleteSpecificReport: (reportId, s3Key) =>
      apiClient.delete(
        `/patient/report/file?reportId=${reportId}&s3Key=${s3Key}`
      ),
  },

  // Doctor-related endpoints
  doctors: {
    getMyDoctors: () => apiClient.get("/patient-doctor/show/doctors"),
    getDoctorById: (UDI_id) =>
      apiClient.get(`/patient-doctor/show/doctor/${UDI_id}`),
    getDoctorSendRequests: () =>
      apiClient.get("/patient-doctor/patient/doctor-requests"),
    cancelRequest: (id) =>
      apiClient.post(`/patient-doctor/patient/cancel-request/${id}`),
    getCurrentDoctors: () => apiClient.get("/patient-doctor/my-doctor"),
    sendDoctorRequest: (id) =>
      apiClient.post(`/patient-doctor/send-request/${id}`),

    addDoctor: (id) => apiClient.post("/patient-doctor/add", { doctorId: id }),
    removeDoctor: (id) => apiClient.delete(`/patient-doctor/remove/${id}`),
    searchDoctors: (query) =>
      apiClient.get(`/patient-doctor/search?query=${query}`),
    getDoctorAvailability: (id, date) =>
      apiClient.get(`/patient-doctor/show/doctor/${id}/availability`, {
        params: { date },
      }),
  },

  // Appointments endpoints
  appointments: {
    bookAppointment: (data) =>
      apiClient.post(`/appointments/book/${data.doctorId}`, data),
    getAppointments: () => apiClient.get("/appointments/details"),
    getAvailableAppointments: (doctorId) =>
      apiClient.get(`/appointments/available/${doctorId}`),
  },

  // Health tracking endpoints
  healthTracking: {
    //Breast Health
    getMammaryChanges: (date) =>
      apiClient.get(`/patient/questions/breast-health/date?date=${date}`),
    getMammaryDates: () =>
      apiClient.get(`/patient/questions/breast-health`, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
    addMammaryChange: (data) =>
      apiClient.post("/patient/questions/breast-health", data),

    // Mastalgia tracking
    getMastalgiaData: (date) =>
      apiClient.get(`/patient/questions/mastalgia-chart?date=${date}`),
    fetchMastalgiaData: (duration) =>
      apiClient.get(`/patient/questions/mastalgia-chart?duration=${duration}`),
    addMastalgiaEntry: (data) =>
      apiClient.post("/patient/questions/mastalgia-chart", data),

    // Medical history
    getMedicalHistory: () => apiClient.get("/patient/questions/health-history"),
    updateMedicalHistory: (data) =>
      apiClient.post("/patient/questions/health-history/medical", data),

    // Emotional history
    getEmotionalHistory: () =>
      apiClient.get("/patient/questions/health-history"),
    updateEmotionalHistory: (data) =>
      apiClient.post("/patient/questions/health-history/emotional", data),

    // Personal medical history
    getPersonalMedicalHistory: () =>
      apiClient.get("/patient/questions/personalMedicalHistory"),
    updatePersonalMedicalHistory: (data) =>
      apiClient.post("/patient/questions/personalMedicalHistory", data),

    // Lifestyle history
    getLifestyleHistory: () => apiClient.get("/patient/questions/lifestyle"),
    updateLifestyleHistory: (data) =>
      apiClient.post("/patient/questions/lifeStyle", data),

    // Cancer history
    getCancerHistory: () =>
      apiClient.get("/patient/questions/familyMedicalHistory"),
    updateCancerHistory: (data) =>
      apiClient.post("/patient/questions/familyMedicalHistory", data),

    // Biopsy
    getBiopsyData: () =>
      apiClient.get(
        "/patient/questions/cancer-history/breast/testsBiopsiesSurgery"
      ),
    updateBiopsyData: (data) =>
      apiClient.post(
        "/patient/questions/cancer-history/breast/testsBiopsiesSurgery",
        data
      ),

    // Comorbidities
    getComorbidities: () =>
      apiClient.get("/patient/questions/cancer-history/comorbid"),
    updateComorbidities: (data) =>
      apiClient.post("/patient/questions/cancer-history/comorbid", data),
  },

  // Breast Cancer Self-Assessment API
  breastCancer: {
    startAssessment: () => apiClient.post("/breast-cancer/assessment"),
    submitAnswers: (assessmentId, answers) =>
      apiClient.post(`/breast-cancer/assessment/${assessmentId}/answers`, {
        answers,
      }),
    getResult: (assessmentId) =>
      apiClient.get(`/breast-cancer/assessment/${assessmentId}/result`),
    getHistory: () => apiClient.get("/breast-cancer/assessment/history"),
  },

  checkFirstLaunch: {
    checkBreastHealthSection: () =>
      apiClient.get("/patient/check-complete-progress/breast-health"),
    checkPersonalMedicalHistorySection: () =>
      apiClient.get(
        "/patient/check-complete-progress/personal-medical-history"
      ),
    checkFamilyCancerHistorySection: () =>
      apiClient.get("/patient/check-complete-progress/family-cancer-history"),
  },

  // s3 file upload
  uploadFile: {
    getUploadPreSignedURL: (fileName, fileType, folderName) =>
      apiClient.post("/s3-files/get-upload-url", {
        fileName,
        fileType,
        folderName,
      }),
    deleteFile: ({ key, folderName }) =>
      apiClient.post("/s3-files/delete-file", { key, folderName }),
  },

  // Notification Service
  notificationService: {
    registerDevice: ({ fcmToken, deviceName, deviceId }) =>
      apiClient.post("/notification/patient/register", {
        fcmToken,
        deviceName,
        deviceId,
      }),
    getNotifications: () => apiClient.get("/notifications"),
    getAllNotifications: () =>
      apiClient.get("/notification/patient/all-notification"),
    markAsRead: (notificationId) =>
      apiClient.put(`/notification/patient/mark-read/${notificationId}`),
    markAllAsRead: () => apiClient.put("/notification/patient/mark-all-read"),
    deleteNotification: (notificationId) =>
      apiClient.delete(`/notification/patient/${notificationId}`),
  },
  // Utilities
  utils: {
    getStates: () => apiClient.get("/utils/states"),
    getDistricts: (stateId) =>
      apiClient.get(`/utils/states/${stateId}/districts`),
    getPincodeDetails: (pincode) => apiClient.get(`/utils/pincode/${pincode}`),
  },
};

export default apiService;
