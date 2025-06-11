import AsyncStorage from "@react-native-async-storage/async-storage";
import apiService from "../../services/api";

export const fetchProfile = () => async (dispatch) => {
    dispatch({ type: "PROFILE_FETCH_START" });

    try {
        // Use apiService directly instead of useApiRequest hook
        const response = await apiService.profile.getProfile();
        dispatch({ type: "PROFILE_FETCH_SUCCESS", payload: response.data });
        return response.data;
    } catch (error) {
        console.error("Profile fetch error:", error);
        dispatch({ type: "PROFILE_FETCH_ERROR", error: error.message || "Failed to fetch profile" });
        return null;
    }
};

export const updateProfile = (profileData) => async (dispatch) => {
  dispatch({ type: "PROFILE_UPDATE_START" });

  try {
    // Use apiService instead of direct axios call
    const response = await apiService.profile.updateProfile(profileData);
    dispatch({ type: "PROFILE_UPDATE_SUCCESS", payload: response.data });
    
    // Store updated user data
    await AsyncStorage.setItem("UserData", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error("❌ Update Error:", error.response?.data || error.message);
    dispatch({
      type: "PROFILE_UPDATE_ERROR",
      error: error.response?.data?.message || "Update failed",
    });
    return null;
  }
};

export const updateProfileImage = (imageUri) => async (dispatch) => {
    dispatch({ type: "PROFILE_IMAGE_UPDATE_START" });
  
    try {
      // Create form data for image upload
      const formData = new FormData();
      formData.append("profileImage", {
        uri: imageUri,
        type: "image/jpeg",
        name: "profile.jpg",
      });
      
      // Use apiService instead of direct axios call
      const response = await apiService.profile.updateProfileImage(formData);
      
      console.log("✅ API Response:", response.data);
      
      // Handle response
      if (response.status === 201 || response.status === 200) {
        dispatch({ 
          type: "PROFILE_IMAGE_UPDATE_SUCCESS", 
          payload: response.data.data.profileImage 
        });
        return response.data.data.profileImage;
      } else {
        console.error("❌ Profile image update failed:", response.data);
        dispatch({ type: "PROFILE_IMAGE_UPDATE_ERROR", error: "Update failed" });
        return null;
      }
    } catch (error) {
      console.error("❌ Image Upload Error:", error.response?.data || error.message);
      dispatch({ 
        type: "PROFILE_IMAGE_UPDATE_ERROR", 
        error: error.message || "Upload failed" 
      });
      return null;
    }
  };