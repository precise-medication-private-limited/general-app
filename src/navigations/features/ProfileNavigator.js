import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Color, FontFamily } from "../../utils/GlobalStyles";

import Profile from "../../screens/profile/Profile";
import PersonalInfo_Profile from "../../screens/profile/PersonalInfo_Profile";
import Address_Profile from "../../screens/profile/Address_Profile";
import Profile_Contact from "../../screens/profile/Profile_Contact";

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PersonalInfo_Profile"
        component={PersonalInfo_Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Address_Profile"
        component={Address_Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile_Contact"
        component={Profile_Contact}
        options={{
          headerShown: false,
        }}
      />
    </>
  );
};

export default ProfileNavigator;