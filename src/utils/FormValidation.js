import { Platform, ToastAndroid } from 'react-native';
import Toast from 'react-native-toast-message';

// Error message constants
export const ERROR_TYPES = {
    REQUIRED: 'REQUIRED',
    INVALID_FORMAT: 'INVALID_FORMAT',
    CUSTOM: 'CUSTOM',
};

// Centralized error messages for different languages
export const errorMessages = {
    en: {
        REQUIRED: 'This field is required',
        INVALID_FORMAT: 'Invalid format',
        INVALID_EMAIL: 'Please enter a valid email address',
        INVALID_PHONE: 'Please enter a valid phone number',
        PASSWORDS_DONT_MATCH: 'Passwords do not match',
        GENERAL_ERROR: 'Please complete all required fields',

        // Health form specific messages
        CHRONIC_CONDITION_REQUIRED: "Please select at least one chronic condition",
        CHRONIC_CONDITION_OTHER_REQUIRED: "Please provide details for 'Other' condition",
        INFECTIOUS_DISEASE_REQUIRED: "Please select whether you have had any infectious diseases",
        INFECTIOUS_TYPE_REQUIRED: "Please select at least one infectious disease",
        INFECTIOUS_OTHER_REQUIRED: "Please provide details for 'Other' infectious disease",
        SURGERY_REQUIRED: "Please select whether you have had any surgeries",
        SURGERY_TYPE_REQUIRED: "Please select at least one surgery type",
        SURGERY_OTHER_REQUIRED: "Please provide details for 'Other' surgery",
        ALLERGIES_REQUIRED: "Please select whether you have any allergies",
        ALLERGIES_TYPE_REQUIRED: "Please select at least one allergy type",
        ALLERGIES_OTHER_REQUIRED: "Please provide details for 'Other' allergy",
        VACCINE_REQUIRED: "Please select whether you have taken any vaccines",
        VACCINE_TYPE_REQUIRED: "Please select at least one vaccine type",
        VACCINE_OTHER_REQUIRED: "Please provide details for 'Other' vaccine",
        ALTERNATIVE_MEDICINE_REQUIRED: "Please select whether you use alternative medicine",
        ALTERNATIVE_MEDICINE_TYPE_REQUIRED: "Please select at least one alternative medicine type",
        ALTERNATIVE_MEDICINE_OTHER_REQUIRED: "Please provide details for 'Other' alternative medicine",
        REPRODUCTIVE_HEALTH_REQUIRED: "Please select whether you have any reproductive health issues",
        REPRODUCTIVE_HEALTH_TYPE_REQUIRED: "Please select at least one reproductive health issue",
        REPRODUCTIVE_HEALTH_OTHER_REQUIRED: "Please provide details for 'Other' reproductive health issue",
        MENSTRUATION_REQUIRED: "Please select whether you have menstruation",
        MENSTRUATION_CYCLE_REQUIRED: "Please select your menstruation cycle",
        MENSTRUATION_OTHER_REQUIRED: "Please provide details for 'Other' menstruation cycle",
        HOSPITALIZATION_REQUIRED: "Please select whether you have been hospitalized",
        HOSPITALIZATION_REASON_REQUIRED: "Please provide hospitalization details",

        // Lifestyle form specific messages
        DIET_TYPE_REQUIRED: "Please select your diet type",
        STRESS_ANSWER_REQUIRED: "Please answer if you feel regular stress",
        STRESS_CAUSE_REQUIRED: "Please select at least one cause of stress",
        STRESS_OTHER_CAUSE_REQUIRED: "Please provide details for 'Other' cause of stress",
        WORKING_TYPE_REQUIRED: "Please select your working type",
        HOURS_SPENT_SITTING_REQUIRED: "Please select your working hours",
        SLEEP_DURATION_REQUIRED: "Please select your sleep duration",
        SLEEP_INTERRUPTION_REQUIRED: "Please select if your sleep gets interrupted",
        ADDICTION_ANSWER_REQUIRED: "Please answer if you have any addictions",
        ADDICTION_TYPE_REQUIRED: "Please select at least one addiction type",
        SMOKING_FREQUENCY_REQUIRED: "Please select your smoking frequency",
        ALCOHOL_FREQUENCY_REQUIRED: "Please select your alcohol consumption frequency",
        TEA_FREQUENCY_REQUIRED: "Please select your tea consumption frequency",
        COFFEE_FREQUENCY_REQUIRED: "Please select your coffee consumption frequency",
        TOBACCO_TYPE_REQUIRED: "Please select at least one tobacco type",
        TOBACCO_OTHER_TYPE_REQUIRED: "Please provide details for 'Other' tobacco type",
        TOBACCO_FREQUENCY_REQUIRED: "Please select your tobacco consumption frequency",
        SOCIAL_MEDIA_TYPE_REQUIRED: "Please select at least one social media platform",
        SOCIAL_MEDIA_OTHER_REQUIRED: "Please provide details for 'Other' social media",
        SOCIAL_MEDIA_DURATION_REQUIRED: "Please select your social media usage duration",
        SHOPPING_MODE_REQUIRED: "Please select at least one shopping mode",
    },
    bn: {
        REQUIRED: 'এই ক্ষেত্রটি আবশ্যক',
        INVALID_FORMAT: 'অবৈধ ফরম্যাট',
        INVALID_EMAIL: 'দয়া করে একটি বৈধ ইমেল ঠিকানা লিখুন',
        INVALID_PHONE: 'দয়া করে একটি বৈধ ফোন নম্বর লিখুন',
        PASSWORDS_DONT_MATCH: 'পাসওয়ার্ড মিলছে না',
        GENERAL_ERROR: 'দয়া করে সমস্ত প্রয়োজনীয় ক্ষেত্র পূরণ করুন',

        // Add Bengali translations for health and lifestyle specific messages
        CHRONIC_CONDITION_REQUIRED: "অনুগ্রহ করে কমপক্ষে একটি দীর্ঘস্থায়ী রোগ নির্বাচন করুন",
    },
    hi: {
        REQUIRED: 'यह फ़ील्ड आवश्यक है',
        INVALID_FORMAT: 'अमान्य प्रारूप',
        INVALID_EMAIL: 'कृपया एक वैध ईमेल पता दर्ज करें',
        INVALID_PHONE: 'कृपया एक वैध फोन नंबर दर्ज करें',
        PASSWORDS_DONT_MATCH: 'पासवर्ड मेल नहीं खाते',
        GENERAL_ERROR: 'कृपया सभी आवश्यक फ़ील्ड भरें',

        // Add Hindi translations for health and lifestyle specific messages
        CHRONIC_CONDITION_REQUIRED: "कृपया कम से कम एक क्रॉनिक कंडीशन का चयन करें",
    },
    as: {
        REQUIRED: 'এই ক্ষেত্ৰটি আৱশ্যক',
        INVALID_FORMAT: 'অবৈধ ফৰমেট',
        INVALID_EMAIL: 'অনুগ্ৰহ কৰি এটা বৈধ ইমেইল ঠিকনা লিখক',
        INVALID_PHONE: 'অনুগ্ৰহ কৰি এটা বৈধ ফোন নম্বৰ লিখক',
        PASSWORDS_DONT_MATCH: 'পাছৱৰ্ডবোৰ মিল নাখায়',
        GENERAL_ERROR: 'অনুগ্ৰহ কৰি সকলো আৱশ্যকীয় ক্ষেত্ৰ পূৰণ কৰক',

        // Add Assamese translations for health and lifestyle specific messages
        CHRONIC_CONDITION_REQUIRED: "অনুগ্ৰহ কৰি কমেও এটা দীৰ্ঘস্থায়ী ৰোগ বাছি লওক",
    }
};

// Get error message based on language and error key
export const getErrorMessage = (language, messageKey) => {
    return errorMessages[language]?.[messageKey] || errorMessages.en[messageKey] || errorMessages.en.GENERAL_ERROR;
};

// Show toast message
export const showToast = (message, type = 'error') => {
    if (Platform.OS === 'android') {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
        Toast.show({
            type: type,
            text1: message,
            position: 'bottom',
            visibilityTime: 3000,
        });
    }
};

// Field validators
export const validators = {
    required: (value) => {
        if (value === null || value === undefined || value === '') {
            return { isValid: false, errorType: ERROR_TYPES.REQUIRED };
        }
        if (Array.isArray(value) && value.length === 0) {
            return { isValid: false, errorType: ERROR_TYPES.REQUIRED };
        }
        return { isValid: true };
    },

    email: (value) => {
        if (!value) return { isValid: true }; // Skip if empty (use required validator separately)

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return { isValid: false, errorType: 'INVALID_EMAIL' };
        }
        return { isValid: true };
    },

    phone: (value) => {
        if (!value) return { isValid: true }; // Skip if empty (use required validator separately)

        // Basic phone validation - can be adjusted based on region requirements
        const phoneRegex = /^\d{10,15}$/;
        if (!phoneRegex.test(value.replace(/[-()\s]/g, ''))) {
            return { isValid: false, errorType: 'INVALID_PHONE' };
        }
        return { isValid: true };
    },

    // Add more validators as needed
};

// Form validation helper
export const validateForm = (formData, validationRules, language = 'en') => {
    const errors = {};
    let isValid = true;

    Object.entries(validationRules).forEach(([fieldName, fieldRules]) => {
        for (const rule of fieldRules) {
            // Simple string rule (refers to a predefined validator)
            if (typeof rule === 'string') {
                if (validators[rule]) {
                    const result = validators[rule](formData[fieldName]);
                    if (!result.isValid) {
                        errors[fieldName] = getErrorMessage(language, result.errorType);
                        isValid = false;
                        break;
                    }
                }
            }
            // Object rule with custom validation
            else if (typeof rule === 'object') {
                if (rule.custom && typeof rule.custom === 'function') {
                    const result = rule.custom(formData[fieldName], formData);
                    if (!result.isValid) {
                        errors[fieldName] = getErrorMessage(language, rule.errorMessage || result.errorType);
                        isValid = false;
                        break;
                    }
                }
            }
        }
    });

    return { isValid, errors };
}; 