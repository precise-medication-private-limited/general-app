# ME App - Patient Mobile Application

## Overview

ME App is a healthcare mobile application designed for patients, particularly focused on breast cancer awareness, tracking, and management. The app allows patients to track symptoms, schedule appointments with doctors, maintain health records, and access educational resources.

## Features

- **User Authentication**: Secure login and registration
- **Health Tracking**:
  - Track breast health symptoms
  - Record menstrual cycles
  - Manage pain tracking and analysis
- **Medical Records Management**:
  - Upload and store medical reports
  - Maintain prescriptions and medical history
  - Direct upload to secure S3 storage
- **Doctor Appointments**:
  - Find and connect with healthcare providers
  - Schedule and manage appointments
- **Educational Resources**:
  - Access information about breast health
  - Learn about early detection methods

## Technology Stack

- React Native
- Expo
- Redux for state management
- RESTful API communication
- AWS S3 for file storage
- Multi-language support (English, Bengali, Assamese, Hindi)

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd me-app
```

1. Install dependencies

```bash
npm install
# or
yarn install
```

1. Start the development server

```bash
npx expo start
```

1. Run on device or emulator

- Press 'a' for Android
- Press 'i' for iOS (requires macOS)
- Scan QR code with Expo Go app on physical device

## Project Structure

```ifo
me-app/
├── assets/               # Static assets (images, fonts)
├── src/
│   ├── breast-cancer/    # Breast cancer specific modules
│   ├── components/       # Reusable UI components
│   ├── navigations/      # Navigation configuration
│   ├── screens/          # Application screens
│   ├── services/         # API services
│   ├── utils/            # Utility functions
│   ├── redux/            # State management
│   └── store.js          # Redux store configuration
└── App.js                # Main application entry point
```

## Building for Production

```bash
# For Android
eas build -p android

# For iOS
eas build -p ios
```

## Building with EAS

The app uses Expo Application Services (EAS) for building iOS and Android binaries. Multiple build profiles are configured for different environments.

### Available Build Profiles

- **development**: Creates a development build with debugging tools enabled
- **preview**: Creates an internal distribution build for testing
- **production**: Creates a production-ready build for App Store and Play Store submission

### Building the App

```bash
# Install EAS CLI if you haven't already
npm install -g eas-cli

# Login to your Expo account
eas login

# Development build (with development client)
eas build --profile development --platform android
eas build --profile development --platform ios

# Preview build (for internal testing)
eas build --profile preview --platform android
eas build --profile preview --platform ios

# Production build (for store submission)
eas build --profile production --platform android
eas build --profile production --platform ios
```

### Android APK Builds

The production profile has been configured to create APK files for Android builds. To build an APK:

```bash
# Build APK for production
eas build --profile production --platform android

# If you need to build an APK in other profiles (e.g., preview), use:
eas build --profile preview --platform android --local --output=./my-app.apk
```

#### APK vs AAB

- **APK**: Directly installable on Android devices
- **AAB (Android App Bundle)**: The format required by Google Play Store

Note: If you need an AAB file for Play Store submission, you'll need to modify the `buildType` setting in eas.json.

### Installing Development Builds

For development builds, you can install the app directly on your device:

```bash
# For Android
eas build:run -p android

# For iOS (requires a connected device)
eas build:run -p ios
```

### Submitting to App Stores

```bash
# Submit to Google Play Store
eas submit -p android --profile production

# Submit to Apple App Store
eas submit -p ios --profile production
```

## Contributing

1. Create a feature branch
2. Implement your changes
3. Submit a pull request

## License

[Proprietary] - © 2025 TellYouDoc Healthcare Solutions
