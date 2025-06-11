import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Color, FontFamily } from "../utils/GlobalStyles";

// Navigation components
import Bottom_Tab from "./Bottom_Tab";
import DrawerScreens from "./DrawerScreens";

// Feature navigators
import AuthNavigator from "./features/AuthNavigator";
import ProfileNavigator from "./features/ProfileNavigator";
import HealthNavigator from "./features/HealthNavigator";
import DoctorNavigator from "./features/DoctorNavigator";
import AppointmentNavigator from "./features/AppointmentNavigator";
import InfoNavigator from "./features/InfoNavigator";

const Stack = createStackNavigator();

const AppNavigator = ({ initialRoute = "WelcomeScreen" }) => {
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: true,
        headerTitleStyle: {
          color: Color.colorBlack,
          fontFamily: FontFamily.Inter_Regular,
          fontSize: 18,
        },
        headerStyle: {
          elevation: 0,
          backgroundColor: Color.bcHeader,
          height: 85,
        },
      }}
    >
      {/* Main container screens */}
      <Stack.Screen
        name="Bottom_Tab"
        component={Bottom_Tab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Drawer_Screens"
        component={DrawerScreens}
        options={{
          headerShown: false,
        }}
      />
      
      
      {/* Feature-specific navigation groups */}
      {HealthNavigator()}
    </Stack.Navigator>
  );
};

export default AppNavigator;