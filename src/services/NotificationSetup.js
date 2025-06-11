// filepath: e:\Breast Cancer Workspace\Integration\Patient\me-app\src\services\NotificationSetup.js
import { useEffect, useState, useRef } from 'react';
import { Alert, Platform, Linking, PermissionsAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Device from 'expo-device';
import {
  getMessaging,
  onMessage,
  getToken,
  onTokenRefresh,
  AuthorizationStatus
} from '@react-native-firebase/messaging';
import notifee, { EventType } from '@notifee/react-native';
import apiService from './api';

// Remove the useNavigation import - we'll use navigationRef instead
// import { useNavigation } from '@react-navigation/native';

// Create a navigation reference to use outside of React components
let navigationRef = null;

// Function to set the navigation reference from App.js
export const setNavigationRef = (ref) => {
  navigationRef = ref;
};

// Function to handle navigation based on notification data
export const handleNotificationNavigation = (data) => {
  if (!navigationRef || !navigationRef.isReady()) {
    console.log('Navigation ref not ready, saving notification for later');
    // Store the notification data to handle it when navigation becomes available
    AsyncStorage.setItem('pendingNotification', JSON.stringify(data));
    return;
  }

  console.log('Handling notification navigation with data:', JSON.stringify(data, null, 2));
  
  try {
    // Get the notification type
    const notificationType = data?.type || '';
    
    // Map notification types to appropriate screens
    switch (notificationType.toLowerCase()) {
      case 'appointment':
      case 'new appointment slot':
        // Navigate to appointments screen
        navigationRef.navigate('Appointments_Nav', { screen: 'Upcoming' });
        break;
        
      case 'connection request':
        // Navigate to doctor requests screen
        navigationRef.navigate('My_Doctor_Nav', { screen: 'Requests' });
        break;
        
      // case 'connection accepted':
      // case 'connection request accepted':
      //   // Navigate to current doctors screen
      //   navigationRef.navigate('My_Doctor_Nav', { screen: 'Current' });
      //   break;
        
      // case 'new note':
      //   // Navigate to health records
      //   navigationRef.navigate('Health_Record_Nav');
      //   break;
        
      // case 'report':
      // case 'new report':
      //   // Navigate to health records, filtered for reports
      //   navigationRef.navigate('Health_Record_Nav', { filter: 'reports' });
      //   break;
        
      // case 'prescription':
      // case 'new prescription':
      //   // Navigate to health records, filtered for prescriptions
      //   navigationRef.navigate('Health_Record_Nav', { filter: 'prescriptions' });
      //   break;
        
      // case 'message':
      //   // If there's a doctor ID, navigate to that doctor's profile
      //   if (data.doctorId) {
      //     navigationRef.navigate('My_Doctor_Nav', { 
      //       screen: 'My_Doctor',
      //       params: { doctorId: data.doctorId }
      //     });
      //   } else {
      //     // Default to current doctors
      //     navigationRef.navigate('My_Doctor_Nav', { screen: 'Current' });
      //   }
      //   break;
        
      default:
        // Default to home screen
        console.log('No specific screen for notification type:', notificationType);
        navigationRef.navigate('Drawer_Screens');
        break;
    }
    
    console.log('Navigation completed successfully');
  } catch (error) {
    console.error('Error navigating from notification:', error);
  }
};

// Check for pending notifications on app start
export const checkPendingNotifications = async () => {
  try {
    const pendingNotification = await AsyncStorage.getItem('pendingNotification');
    if (pendingNotification && navigationRef?.isReady()) {
      const data = JSON.parse(pendingNotification);
      // Clear the pending notification
      await AsyncStorage.removeItem('pendingNotification');
      // Handle the navigation
      handleNotificationNavigation(data);
    }
  } catch (error) {
    console.error('Error checking pending notifications:', error);
  }
};

// Setup background notification handler
notifee.onBackgroundEvent(async ({ type, detail }) => {
  if (type === EventType.PRESS) {
    console.log('[Background] User pressed notification');
    if (detail.notification?.data) {
      // Store the notification data for next app launch
      await AsyncStorage.setItem('pendingNotification', JSON.stringify(detail.notification.data));
    }
  }
  return Promise.resolve();
});

const useNotificationSetup = (isLoggedIn = false) => {
  const [fcmToken, setFcmToken] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [permissionStatus, setPermissionStatus] = useState(null);
  // Create the ref outside of useEffect
  const isInitialMount = useRef(true);
  // Remove the navigation hook - we'll use the navigationRef instead

  // Request notification permissions as soon as login is successful
  useEffect(() => {
    if (isLoggedIn) {
      requestNotificationPermission();
    }
  }, [isLoggedIn]);

  // Function to request notification permission
  const requestNotificationPermission = async () => {
    try {
      // Check if physical device
      if (!Device.isDevice) {
        console.log('Notifications require physical device - skipping in simulator/emulator');
        return false;
      }

      const messaging = getMessaging();

      // For iOS, we need to request permission explicitly
      if (Platform.OS === 'ios') {
        const authStatus = await messaging.requestPermission();
        const enabled =
          authStatus === AuthorizationStatus.AUTHORIZED ||
          authStatus === AuthorizationStatus.PROVISIONAL;

        setPermissionStatus(authStatus);

        if (!enabled) {
          Alert.alert(
            'Permission Required',
            'Notification permission is needed to receive updates about your patients and appointments',
            [
              { text: 'Not Now', style: 'cancel' },
              {
                text: 'Settings',
                onPress: () => {
                  // Open app settings so user can enable notifications
                  if (Platform.OS === 'ios') {
                    Linking.openURL('app-settings:');
                  } else {
                    Linking.openSettings();
                  }
                }
              }
            ]
          );
          return false;
        }
        return enabled;
      } else {
        // On Android, we need to handle permissions differently to avoid the Activity error
        try {
          // Check Android SDK version - POST_NOTIFICATIONS permission is only required for API 33+
          if (Platform.Version >= 33) {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
              {
                title: 'Notification Permission',
                message: 'This app needs access to your notifications to keep you updated.',
                buttonPositive: 'OK',
                buttonNegative: 'Cancel',
              }
            );
            if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
              console.log('Notification permission denied');
              Alert.alert(
                'Permission Required',
                'Notification permission is needed to receive updates about your patients and appointments',
                [
                  { text: 'Not Now', style: 'cancel' },
                  {
                    text: 'Settings',
                    onPress: () => {
                      // Open app settings so user can enable notifications
                      Linking.openSettings();
                    }
                  }
                ]
              );
              return false;
            }
          }

          // For Android, check Firebase messaging permission
          const authStatus = await messaging.hasPermission();
          setPermissionStatus(authStatus);

          if (authStatus === AuthorizationStatus.NOT_DETERMINED) {
            const newAuthStatus = await messaging.requestPermission();
            setPermissionStatus(newAuthStatus);
            return newAuthStatus === AuthorizationStatus.AUTHORIZED ||
              newAuthStatus === AuthorizationStatus.PROVISIONAL;
          }

          return authStatus === AuthorizationStatus.AUTHORIZED ||
            authStatus === AuthorizationStatus.PROVISIONAL;
        } catch (error) {
          console.log('Android permission error:', error);
          // If we get the activity error, return true and let the app continue
          // This is safer than crashing, and Firebase will request permissions later
          // when the activity is properly attached
          if (error.message && error.message.includes('not attached to an Activity')) {
            console.log('Activity not attached yet, will retry permission later');
            return true;
          }
          throw error;
        }
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return false;
    }
  };

  // Setup notification listeners
  useEffect(() => {
    // Only set up notification listeners if logged in
    if (!isLoggedIn) return () => { };

    console.log('Setting up notification listeners...');

    // Create a set to track processed message IDs and prevent duplicates
    const processedMessageIds = new Set();

    // Get messaging instance
    const messagingInstance = getMessaging();    // Handler for foreground messages
    const unsubscribeOnMessage = onMessage(messagingInstance, async remoteMessage => {
      console.log('🔔🔔🔔 NOTIFICATION RECEIVED IN FOREGROUND 🔔🔔🔔');
      console.log('Notification details:', JSON.stringify(remoteMessage, null, 2));
      
      // Skip empty or invalid notifications
      if (!remoteMessage || !remoteMessage.notification ||
        (remoteMessage.sentTime === 0 && !remoteMessage.messageId)) {
        console.log('🔴 DEBUG: Skipping empty notification:', remoteMessage);
        return;
      }

      // Generate a unique identifier for this notification
      const notificationId = remoteMessage.messageId ||
        `${remoteMessage.sentTime}-${remoteMessage.notification?.title}`;

      // Check if we've already processed this notification
      if (processedMessageIds.has(notificationId)) {
        console.log('🔔 DEBUG: Skipping duplicate notification with ID:', notificationId);
        return;
      }

      // Add this notification ID to our processed set
      processedMessageIds.add(notificationId);

      console.log('🔔 DEBUG: Processing notification with ID:', notificationId);

      // Display foreground notification using notifee
      await displayForegroundNotification(remoteMessage);

      // Clean up old message IDs to prevent memory leaks (keep only last 100)
      if (processedMessageIds.size > 100) {
        const idsToDelete = Array.from(processedMessageIds).slice(0, processedMessageIds.size - 100);
        idsToDelete.forEach(id => processedMessageIds.delete(id));
      }
    });

    // Function to display foreground notification
    const displayForegroundNotification = async (remoteMessage) => {
      try {
        // Create a notification channel for Android
        if (Platform.OS === 'android') {
          const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
            importance: 4, // High importance for floating notifications
            vibration: true,
            sound: 'default',
          });
        }

        // Get notification data from the remote message
        const { notification, data } = remoteMessage;
        
        // Extract notification title for type inference
        const title = notification?.title || '';
        
        // If data field is empty, create one based on the notification title
        const enhancedData = {
          ...data,
        };
        
        // Infer notification type from title if not provided in data
        if (!enhancedData.type) {
          if (title.includes('Appointment')) {
            enhancedData.type = 'appointment';
          } else if (title.includes('Connection') || title.includes('Request')) {
            enhancedData.type = 'connection request';
          } else if (title.includes('Report')) {
            enhancedData.type = 'report';
          } else if (title.includes('Prescription')) {
            enhancedData.type = 'prescription';
          } else if (title.includes('Note')) {
            enhancedData.type = 'new note';
          } else if (title.includes('Message')) {
            enhancedData.type = 'message';
          }
        }
        
        console.log('🔔 Enhanced notification data:', enhancedData);

        // Display the notification
        await notifee.displayNotification({
          title: notification?.title || 'New Notification',
          body: notification?.body || '',
          android: {
            channelId: 'default',
            smallIcon: 'ic_launcher', // Use your app's icon
            color: '#4285F4', // Notification color
            pressAction: {
              id: 'default',
            },
            importance: 4, // High importance for floating notifications
          },
          ios: {
            foregroundPresentationOptions: {
              alert: true,
              badge: true,
              sound: true,
            },
          },
          data: enhancedData, // Use the enhanced data
        });
      } catch (error) {
        console.error('Error displaying foreground notification:', error);
      }
    };

    // Handler for notification opened app from background state
    const unsubscribeOnNotificationOpenedApp = messagingInstance.onNotificationOpenedApp(remoteMessage => {
      console.log('Notification opened app from background state:', remoteMessage);
      
      // Handle navigation based on notification data
      if (remoteMessage.data) {
        handleNotificationNavigation(remoteMessage.data);
      }
    });

    // Check if app was opened from a notification when it was killed/quit
    messagingInstance
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Notification opened app from killed state:', remoteMessage);

          // Process notification data and navigate
          const { data } = remoteMessage;
          if (data) {
            handleNotificationNavigation(data);
          }
        }
      })
      .catch(error => {
        console.error('Error checking initial notification:', error);
      });

    // Set up notifee foreground event listener for when user taps on the notification
    const unsubscribeNotifee = notifee.onForegroundEvent(({ type, detail }) => {
      if (type === EventType.PRESS) {
        console.log('User pressed notification in foreground:', detail.notification);
        if (detail.notification?.data) {
          handleNotificationNavigation(detail.notification.data);
        }
      }
    });

    // Cleanup listeners on unmount
    return () => {
      console.log('Cleaning up notification listeners');
      unsubscribeOnMessage();
      unsubscribeOnNotificationOpenedApp();
      unsubscribeNotifee();
    };
  }, [permissionStatus]); // Remove navigation from dependencies

  // Handle token registration after login and permission granted
  useEffect(() => {
    if (!isLoggedIn) return;
    const setupNotifications = async () => {
      // Skip if this effect has already run
      if (!isInitialMount.current) return;
      isInitialMount.current = false;

      try {
        // First check/request permissions
        const permissionGranted = await requestNotificationPermission();
        if (!permissionGranted) {
          console.log('Notification permissions not granted, skipping token setup');
          return;
        }

        // Get messaging instance
        const messagingInstance = getMessaging();

        // Get FCM token
        const token = await getToken(messagingInstance);

        if (!token) {
          console.error('Failed to get FCM token');
          return;
        }

        setFcmToken(token);

        // Get device info
        const deviceInfo = await getDeviceInfo();

        // Register with backend
        const success = await registerDeviceWithBackend(token, deviceInfo);
        setIsRegistered(success);

        if (!success) {
          console.log('Will retry token registration on next app launch');
        }

        // Listen for token refresh
        const unsubscribeTokenRefresh = onTokenRefresh(messagingInstance, newToken => {
          console.log('FCM token refreshed:', newToken);
          registerDeviceWithBackend(newToken, deviceInfo);
          setFcmToken(newToken);
        });

        return () => {
          unsubscribeTokenRefresh();
        };
      } catch (error) {
        console.error('Error in notification setup:', error);
        // Handle the activity error specifically
        if (error.message && error.message.includes('not attached to an Activity')) {
          console.log('Activity not attached yet, will retry notification setup later');
          return;
        }

        Alert.alert(
          'Notification Setup Failed',
          'We were unable to set up notifications. You may not receive important updates.'
        );
      }
    };

    setupNotifications();
  }, [permissionStatus]); // Removed fcmToken from dependencies

  // Return values that might be useful to the component using this hook
  return {
    fcmToken,
    isRegistered,
    permissionStatus,
    requestPermission: requestNotificationPermission
  };
};


/**
 * Retrieve Device Information
 */
const getDeviceInfo = async () => {
  try {
    // Create a unique ID by combining device name with timestamp
    const deviceId = Device.osInternalBuildId || Device.deviceName || 'Unknown';
    const deviceName = Device.deviceName || 'Unknown';
    const deviceModel = Device.modelName || 'Unknown';
    const deviceBrand = Device.brand || 'Unknown';
    const osVersion = Device.osVersion || 'Unknown';
    const platform = Platform.OS;
    return { deviceId, deviceName, deviceModel, deviceBrand, osVersion, platform };
  } catch (error) {
    console.error('Error retrieving device information:', error);
    throw new Error('Failed to retrieve device information.');
  }
};


/**
 * Register Device with Backend
 * Sends FCM token and device information to the backend
 * Handles token refresh by comparing to previously stored token
 */
const registerDeviceWithBackend = async (fcmToken, deviceInfo) => {
  console.log('🔔 DEBUG: Registering device with backend');
  console.log('🔔 DEBUG: FCM Token:', fcmToken);
  console.log('🔔 DEBUG: Device info:', JSON.stringify(deviceInfo, null, 2));
  try {
    if (!fcmToken) {
      console.error('🔴 ERROR: No valid FCM token to register');
      return false;
    }

    // Force token registration regardless of local storage
    // This ensures the token is always sent to the backend
    console.log('🔔 DEBUG: Forcing token registration to backend');
    
    // Register the device with backend
    console.log('🔔 DEBUG: Calling API endpoint with token:', fcmToken.substring(0, 10) + '...');
    const response = await apiService.notificationService.registerDevice({
      fcmToken: fcmToken,
      deviceId: deviceInfo.deviceId,
      deviceName: deviceInfo.deviceName,
    });

    console.log('🔔 DEBUG: Backend response status:', response.status);
    console.log('🔔 DEBUG: Backend response data:', JSON.stringify(response.data, null, 2));

    if (response.status === 200) {
      console.log('✅ SUCCESS: Device registered successfully with backend');
      // Save token locally after successful registration
      await AsyncStorage.setItem('fcmToken', fcmToken);
      return true;
    } else {
      console.error('🔴 ERROR: Backend returned non-200 status:', response.status);
      return false;
    }
  } catch (error) {
    console.error('🔴 ERROR: Error registering device with backend:', 
      error?.response?.data || error.message || error);
    console.error('🔴 ERROR: Full error object:', JSON.stringify(error, null, 2));
    
    // If it's a network error, we can try again later
    if (error.message && error.message.includes('Network Error')) {
      console.log('🔔 DEBUG: Will retry when network is available');
    }
    return false;
  }
};

export default useNotificationSetup;
