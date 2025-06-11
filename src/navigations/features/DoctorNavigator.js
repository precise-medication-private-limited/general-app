import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Color, FontFamily } from "../../utils/GlobalStyles";

// Doctor screens
import My_Doctor_Nav from "../../screens/My Doctor/My_Doctor_Nav";
import My_Doctor from "../../screens/My Doctor/My_Doctor";
import QR_Code_Scanner from "../../screens/QR_Code_Scanner";
import SavedDoctors from "../../screens/My Doctor/SavedDoctors";
import DoctorProfile from "../../screens/My Doctor/DoctorProfile";

const Stack = createStackNavigator();

const DoctorNavigator = () => {
  return (
    <>
      <Stack.Screen
        name="My_Doctor_Nav"
        component={My_Doctor_Nav}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="My_Doctor"
        component={My_Doctor}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="QR_Code_Scanner"
        component={QR_Code_Scanner}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SavedDoctors"
        component={SavedDoctors}
        options={{
          title: "Saved Doctors",
          headerTitleAlign: "center",
          headerTitleStyle: {
        color: Color.colorWhite,
        fontFamily: FontFamily.Inter_SemiBold,
        fontSize: 16,
          },
          headerTintColor: Color.colorWhite, // This makes the back button white
        }}
      />
      <Stack.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        options={{
          title: "Doctor Profile",
          headerShown: false,
          headerTitleAlign: "center",
          headerTitleStyle: {
        color: Color.colorWhite,
        fontFamily: FontFamily.Inter_SemiBold,
        fontSize: 16,
          },
          headerTintColor: Color.colorWhite, // This makes the back button white
        }}
      />
    </>
  );
};

export default DoctorNavigator;