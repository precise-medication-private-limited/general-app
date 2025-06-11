import AsyncStorage from '@react-native-async-storage/async-storage';
// Onboarding section IDs - used as keys for AsyncStorage
export const SECTIONS = {
    PROFILE: 'profileCompleted',
    BREAST_HEALTH: 'breastHealthCompleted',
    FAMILY_PART: 'familyPartCompleted',
    MEDICAL_HISTORY: 'medicalHistoryCompleted',
    FAMILY_HISTORY: 'familyHistoryCompleted',
    DOCTOR_SHARED: 'doctorShared'
};

// Check if this is the user's first launch
export const checkFirstLaunch = async () => {
    try {
        const hasLaunched = await AsyncStorage.getItem('hasLaunchedBefore');
        return hasLaunched === null;
    } catch (error) {
        console.error('Error checking first launch:', error);
        return false;
    }
};

// Mark first launch as completed
export const markFirstLaunch = async () => {
    try {
        await AsyncStorage.setItem('hasLaunchedBefore', 'true');
    } catch (error) {
        console.error('Error marking first launch:', error);
    }
};

// Check the completion status of a specific section
export const checkSectionCompleted = async (sectionKey) => {
    try {
        
        const isCompleted = await AsyncStorage.getItem(sectionKey);
        return isCompleted === 'true';
    } catch (error) {
        console.error(`Error checking section ${sectionKey} completion:`, error);
        return false;
    }
};

// Mark a section as completed
export const markSectionCompleted = async (sectionKey) => {
    try {
        await AsyncStorage.setItem(sectionKey, 'true');
        return true;
    } catch (error) {
        console.error(`Error marking section ${sectionKey} as completed:`, error);
        return false;
    }
};

// Reset a section's completion status (for testing)
export const resetSection = async (sectionKey) => {
    try {
        await AsyncStorage.removeItem(sectionKey);
        return true;
    } catch (error) {
        console.error(`Error resetting section ${sectionKey}:`, error);
        return false;
    }
};

// Get completion status for all sections
export const getAllSectionsStatus = async () => {
    try {
        const sections = {};

        for (const [key, value] of Object.entries(SECTIONS)) {
            sections[key.toLowerCase()] = await checkSectionCompleted(value);
        }

        return sections;
    } catch (error) {
        console.error('Error getting all section statuses:', error);
        return {};
    }
};

// Calculate overall progress percentage
export const calculateOverallProgress = async () => {
    try {
        const sections = await getAllSectionsStatus();
        const completedCount = Object.values(sections).filter(Boolean).length;
        const totalSections = Object.keys(sections).length;

        // Ensure we return a valid number between 0 and 1
        const progress = totalSections > 0 ? completedCount / totalSections : 0;
        return isNaN(progress) ? 0 : Math.min(Math.max(progress, 0), 1);
    } catch (error) {
        console.error('Error calculating overall progress:', error);
        return 0;
    }
};

// Get the next section that needs to be completed
export const getNextIncompleteSection = async () => {
    try {
        const sections = await getAllSectionsStatus();

        // Priority order of sections to complete
        const priorityOrder = [
            'profile',
            'breast_health',
            'family_part',
            'medical_history',
            'family_history',
            'doctor_shared'
        ];

        // Find the first incomplete section based on priority
        for (const section of priorityOrder) {
            if (!sections[section]) {
                return section;
            }
        }

        return null; // All sections are complete
    } catch (error) {
        console.error('Error getting next incomplete section:', error);
        return null;
    }
};

// Check if all sections are completed
export const areAllSectionsCompleted = async () => {
    try {
        const sections = await getAllSectionsStatus();
        return Object.values(sections).every(Boolean);
    } catch (error) {
        console.error('Error checking if all sections are completed:', error);
        return false;
    }
};

// Map section keys to screen names
export const sectionToScreenMap = (profile) => {
    return {
        profile: 'Profile',
        breast_health: 'Mammary_Changes',
        family_part: 'Family_Part',
        medical_history: 'Personal_Medical_History',
        family_history: 'Family_History_Question',
        doctor_shared: profile?.savedDoctors?.length > 0 ? 'Saved Doctors' : 'QR_Code_Scanner'
    };
};

// Get the screen name for a section
export const getScreenForSection = (sectionKey, profile) => {
    return sectionToScreenMap(profile)[sectionKey] || 'Drawer_Screens';
}; 