import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { useState, useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from "expo-splash-screen";
import Toast from "react-native-toast-message";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootSiblingParent } from 'react-native-root-siblings';
// Added For Redux
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./src/redux/store.js";
import { fetchProfile } from "./src/redux/actions/profileAction";
// Main navigation
import AppNavigator from "./src/navigations/AppNavigator.js";
// Enable screens - needed for react-native-screens
import { enableScreens } from 'react-native-screens';

// Import Notification Service
import useNotificationSetup, { setNavigationRef, checkPendingNotifications } from './src/services/NotificationSetup.js';

// Initialize screens
enableScreens();

// Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

// Custom hook for our initialization flow
const useAuthInit = () => {
  const [state, setState] = useState({
    isInitializing: true,
    isAuthenticated: false
  });
  const dispatch = useDispatch();
  const { profile, loading } = useSelector(state => state.profile);
  
  // This effect runs once on component mount
  useEffect(() => {
    const initialize = async () => {
      try {
        console.log("🔄 Starting app initialization...");
        
        // First check if user has tokens
        const token = await AsyncStorage.getItem('AccessToken');
        const asUser = await AsyncStorage.getItem('AsUser');
        
        // If no tokens, we're done - not authenticated
        if (!token || !asUser) {
          console.log("🔒 No auth tokens found - not authenticated");
          setState({
            isInitializing: false,
            isAuthenticated: false
          });
          return;
        }
        
        // We have tokens, start profile fetch and wait for it
        console.log("🔑 Auth tokens found, fetching profile data...");
        const profileResponse = await dispatch(fetchProfile()).unwrap?.() || 
                               await dispatch(fetchProfile());
        
        // Profile fetch complete - check if we got valid data
        console.log("✅ Profile fetch complete:", !!profileResponse);
        const isAuthenticated = !!(profileResponse || (profile && profile.data));
        
        setState({
          isInitializing: false,
          isAuthenticated
        });
      } catch (error) {
        console.error("❌ Initialization error:", error);
        setState({
          isInitializing: false,
          isAuthenticated: false
        });
      }
    };
    
    initialize();
  }, [dispatch]);
  
  return state;
};

// AppContent component to handle Redux connections
const AppContent = () => {
  // Use our custom initialization hook
  const { isInitializing, isAuthenticated } = useAuthInit();
  
  // Create a navigation reference
  const navigationRef = useRef(null);

  // Initialize notification setup
  useNotificationSetup(isAuthenticated);

  // Check for pending notifications after navigation is ready
  useEffect(() => {
    if (navigationRef.current?.isReady()) {
      checkPendingNotifications();
    }
  }, []);

  // Hide splash screen when initialization is complete
  useEffect(() => {
    const hideSplashScreen = async () => {
      if (!isInitializing) {
        console.log("🚀 App ready, showing:", isAuthenticated ? "Drawer_Screens" : "WelcomeScreen");
        await SplashScreen.hideAsync();
      }
    };
    
    hideSplashScreen();
  }, [isInitializing, isAuthenticated]);

  // Show loading indicator if we're still initializing
  if (isInitializing) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#ff4d6d" />
      </View>
    );
  }

  const initialRoute = isAuthenticated ? "Edit_Medical_History" : "Edit_Medical_History";
  console.log("🚀 Navigation initialized with route:", initialRoute);

  return (
    <>
      <StatusBar backgroundColor="transparent" style="light" />
      <NavigationContainer 
        ref={navigationRef}
        onReady={() => {
          // Set the navigation reference for use in notifications
          setNavigationRef(navigationRef.current);
          // Check for pending notifications once navigation is ready
          checkPendingNotifications();
        }}
      >
        <RootSiblingParent>
          <AppNavigator initialRoute={initialRoute} />
        </RootSiblingParent>
      </NavigationContainer>
      <Toast />
    </>
  );
};

// App component stays mostly the same
const App = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter_18pt-Regular.ttf"),
    "Inter-Semibold": require("./assets/fonts/Inter_18pt-Medium.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter_18pt-Bold.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter_18pt-SemiBold.ttf"),
  });
  const [loading, setLoading] = useState(true);

  // Hide the splash screen when the fonts are loaded but keep app in loading state
  useEffect(() => {
    if (fontsLoaded) {
      setLoading(false);
      // Don't hide splash screen here - will be handled by AppContent
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || loading) {
    return null;
  }

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppContent />
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
