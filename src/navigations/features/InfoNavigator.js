import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Color, FontFamily } from "../../utils/GlobalStyles";

// Info screens
import FAQ from "../../breast-cancer/screens/others/FAQ";
import Settings from "../../breast-cancer/screens/others/Settings";
import PrivacyPolicy from "../../breast-cancer/screens/others/PrivacyPolicy";
import TermsConditions from "../../breast-cancer/screens/others/TermsConditions";
import HelpSupport from "../../breast-cancer/screens/others/HelpSupport";
import AboutUs from "../../breast-cancer/screens/others/AboutUs";
import Notification from "../../breast-cancer/screens/others/Notification";

const Stack = createStackNavigator();

const InfoNavigator = () => {
  return (
    <>
      <Stack.Screen
        name="FAQ"
        component={FAQ}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Settings" 
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="PrivacyPolicy" 
        component={PrivacyPolicy}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="TermsConditions" 
        component={TermsConditions}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="HelpSupport" 
        component={HelpSupport}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="AboutUs" 
        component={AboutUs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Notification" 
        component={Notification}
        options={{
          headerShown: false,
        }}

      />
    </>
  );
};

export default InfoNavigator;