import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Animated,
  Platform,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useEffect } from "react";
import {
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import * as Haptics from 'expo-haptics';  // Fixed Haptics import
const Drawer = createDrawerNavigator();
import Bottom_Tab from "./Bottom_Tab";
import { Color, FontFamily } from "../utils/GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfile, fetchProfileImage } from "../redux/actions/profileAction";
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from "react-native-paper";
import apiService from "../services/api";

const MenuItem = ({ icon, name, onPress }) => {
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    Animated.spring(scaleAnim, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={[
          styles.sectionCard,
          { transform: [{ scale: scaleAnim }] }
        ]}
      >
        <View style={styles.menuIconContainer}>
          <MaterialIcons
            name={icon}
            size={22}
            color={Color.bcHighlight}
          />
        </View>
        <Text style={styles.sectionText}>{name}</Text>
        <Ionicons
          name="chevron-forward"
          size={20}
          color="#666"
          style={styles.menuArrow}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const BreastCancerContent = (props) => {
  // User data state
  const dispatch = useDispatch();
  const { profile, profileImage, loading, error } = useSelector(state => state.profile);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchProfile());
      dispatch(fetchProfileImage());
    };

    if (!profile) {
      fetchData();
    }
  }, [dispatch, profile]);

  if (profile) {
    if (profile) {
      AsyncStorage.setItem("profileCompleted", 'true');
    }
    if (profile?.data?.familyInformation) {
      AsyncStorage.setItem("familyPartCompleted",'true');
    }
  }

  //check breast health section completed
  const checkBreastHealthSection = async () => {
    try {
      const response = await apiService.checkFirstLaunch.checkBreastHealthSection();
      const sectionCompleted = response.data?.isCompleted; // Assuming the API returns a boolean value
      if (sectionCompleted) {
        await AsyncStorage.setItem('breastHealthCompleted', 'true');
      }
      else {  
        await AsyncStorage.removeItem('breastHealthCompleted');
      }
      return sectionCompleted;
    } catch (error) {
      console.error(`Error checking section breast_health:`, error);
      return false;
    }
  };

  //personal medical history section completed
  const checkPersonalMedicalHistorySection = async () => {
    try {
      const response = await apiService.checkFirstLaunch.checkPersonalMedicalHistorySection();
      const sectionCompleted = response.data?.isCompleted; // Assuming the API returns a boolean value 
      if (sectionCompleted) {
        await AsyncStorage.setItem('medicalHistoryCompleted', 'true');
      }
      else {  
        await AsyncStorage.removeItem('medicalHistoryCompleted');
      }
      // Save the completion status in AsyncStorage
      return sectionCompleted;
    } catch (error) {
      console.error(`Error checking section personal_medical_history:`, error);
      return false;
    }
  };

  //family cancer history section completed
  const checkFamilyCancerHistorySection = async () => {
    try {
      const response = await apiService.checkFirstLaunch.checkFamilyCancerHistorySection();
      const sectionCompleted = response.data?.isCompleted; // Assuming the API returns a boolean value 
      if (sectionCompleted) {
        await AsyncStorage.setItem('familyHistoryCompleted', 'true');
      }
      else {  
        await AsyncStorage.removeItem('familyHistoryCompleted');
      }
      // Save the completion status in AsyncStorage
      return sectionCompleted;
    } catch (error) {
      console.error(`Error checking section family_cancer_history:`, error);
      return false;
    }
  };

  useEffect(() => {
    checkBreastHealthSection();
    checkPersonalMedicalHistorySection();
    checkFamilyCancerHistorySection();
  }, []);

  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <LinearGradient
          colors={['#FFFFFF', '#FEF6F8', '#FFF0F4']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          locations={[0, 0.5, 1]}
          style={styles.headerGradient}
        />
      </View>

      <Pressable
        onPress={() => props.navigation.navigate("Profile")}
        style={styles.profileContainer}
      >
        <View style={styles.profileImageWrapper}>
          <View style={styles.profileImageContainer}>
            {loading ? (
              <ActivityIndicator size="small" color="#ffa6bb" />
            ) : profileImage ? (
              <Avatar.Image
                source={{ uri:profileImage }}
                size={85}
                style={styles.profileImage}
              />
            ) : (
              <Avatar.Text
                label={
                  (profile?.data?.firstName ? profile?.data?.firstName[0] : "") +
                  (profile?.data?.lastName ? profile?.data?.lastName[0] : "")
                }
                size={85}
                labelStyle={{ fontSize: 32, fontFamily: FontFamily.Inter_Bold }}
                style={styles.profileImage}
              />
            )}
          </View>
        </View>
        <View style={styles.profileTextContainer}>
          {loading ? (
            <View>
              <View style={{ width: 120, height: 22, backgroundColor: '#f0f0f0', borderRadius: 4, marginBottom: 6 }} />
              <View style={{ width: 80, height: 18, backgroundColor: '#f0f0f0', borderRadius: 4, marginBottom: 8 }} />
              <View style={{ width: 100, height: 16, backgroundColor: '#f0f0f0', borderRadius: 4 }} />
            </View>
          ) : (
            <>
              <Text
                style={styles.drawerHeaderText}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {
                  profile?.data?.firstName +
                  (profile?.data?.middleName ? " " + profile?.data?.middleName : "") +
                  (profile?.data?.lastName ? " " + profile?.data?.lastName : "")
                }
              </Text>
              <Text style={styles.profileEmail} numberOfLines={1}>
                {profile?.data?.email || 'Add email'}
              </Text>
              <View style={styles.viewProfileButton}>
                <Text style={styles.viewProfileText}>View Profile</Text>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color={Color.bcHighlight}
                  style={styles.viewProfileIcon}
                />
              </View>
            </>
          )}
        </View>
      </Pressable>

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: Platform.OS === 'ios' ? 100 : 80 }
        ]}
      >
        <View style={styles.menuContainer}>
          {[
            { icon: 'book', name: 'My Health', screen: 'Health_History' },
            { icon: 'fitness-center', name: 'My Lifestyle', screen: 'Lifestyle_History' },
            { icon: 'medical-services', name: 'Cancer History', screen: 'Cancer_History' },
            { icon: 'settings', name: 'Settings', screen: 'Settings' },
            { icon: 'security', name: 'Privacy Policy', screen: 'PrivacyPolicy' },
            { icon: 'description', name: 'Terms & Conditions', screen: 'TermsConditions' },
            { icon: 'support', name: 'Help and Support', screen: 'HelpSupport' },
            { icon: 'info', name: 'About Us', screen: 'AboutUs' },
            { icon: 'help-outline', name: 'FAQ', screen: 'FAQ' },
          ].map((item, index) => (
            <MenuItem
              key={index}
              {...item}
              onPress={() => props.navigation.navigate(item.screen)}
            />
          ))}
        </View>

        {/* Footer Buttons */}
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={async () => {
              try {
                // Clear all authentication and user data
                const keysToRemove = [
                  "AccessToken", 
                  "AsUser", 
                  "UserData",
                  "fcmToken",
                  "profileCompleted",
                  "familyPartCompleted",
                  "breastHealthCompleted",
                  "medicalHistoryCompleted",
                  "familyHistoryCompleted"
                ];
                
                // Remove all keys in parallel
                await Promise.all(keysToRemove.map(key => AsyncStorage.removeItem(key)));
                
                // Call the logout API endpoint if needed
                try {
                  await apiService.auth.logout();
                  console.log("Successfully logged out from the server");
                } catch (error) {
                  console.log("Error logging out from server:", error);
                  // Continue with local logout even if server logout fails
                }
                
                // Navigate to login screen
                props.navigation.replace("Login");
              } catch (error) {
                console.error("Error during logout:", error);
                Alert.alert("Logout Error", "An error occurred while logging out. Please try again.");
              }
            }}
          >
            <Ionicons name="log-out-outline" size={20} color={Color.bcHighlight} />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
          <Text style={styles.versionText}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );
};


const DrawerScreens = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: Color.colorWhite,
          width: Platform.OS === 'ios' ? '85%' : '80%',
          overflow: 'hidden',
          elevation: 24,
          shadowColor: '#000',
          shadowOffset: {
            width: 4,
            height: 0,
          },
          shadowOpacity: 0.15,
          shadowRadius: 12,
        },
        drawerType: Platform.OS === 'ios' ? 'slide' : 'front',
        swipeEnabled: true,
        gestureHandlerProps: {
          activeOffsetX: 20,
        },
      }}
      drawerContent={(props) => <BreastCancerContent {...props} />}
    >
      <Drawer.Screen
        name="BottomTab"
        component={Bottom_Tab}
      />
    </Drawer.Navigator>
  );
};

export default DrawerScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    height: 140,
    overflow: 'hidden',
  },
  headerGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: -54,
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  profileImageWrapper: {
    padding: 3,
    borderRadius: 45,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  profileImageContainer: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    overflow: 'hidden',
    backgroundColor: Color.bclight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    backgroundColor: Color.bclight,
  },
  profileTextContainer: {
    marginLeft: 16,
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 4,
  },
  drawerHeaderText: {
    fontFamily: FontFamily.Inter_SemiBold,
    fontSize: 18,
    color: '#333',
    marginBottom: 6,
    lineHeight: 22,
  },
  profileEmail: {
    fontFamily: FontFamily.Inter_Regular,
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 18,
  },
  viewProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  viewProfileText: {
    fontFamily: FontFamily.Inter_Medium,
    fontSize: 14,
    color: Color.bcHighlight,
    marginRight: 2,
  },
  viewProfileIcon: {
    marginTop: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  menuContainer: {
    paddingHorizontal: 12,
    paddingTop: 16,
  },
  sectionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 5,
    borderRadius: 12,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Color.bclight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  sectionText: {
    flex: 1,
    fontFamily: FontFamily.Inter_Medium,
    fontSize: 15,
    color: '#333',
  },
  menuArrow: {
    marginLeft: 'auto',
  },
  footerContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 34 : 24,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: Color.bclight,
    width: '100%',
    minHeight: 48,
  },
  logoutText: {
    marginLeft: 8,
    color: Color.bcHighlight,
    fontFamily: FontFamily.Inter_SemiBold,
    fontSize: 15,
    lineHeight: 20,
  },
  versionText: {
    marginTop: 16,
    fontFamily: FontFamily.Inter_Regular,
    fontSize: 12,
    color: '#999',
  },
});
