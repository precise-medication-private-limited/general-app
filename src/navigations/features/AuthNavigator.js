import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Color, FontFamily } from "../../utils/GlobalStyles";

// Auth screens
import Login from "../../screens/Login";
import Register from "../../screens/Register";
import WelcomeScreen from "../../screens/WelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: " ",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: " ",
        }}
      />
    </>
  );
};

export default AuthNavigator;