import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Appointment screens
import Appointments_Nav from "../../screens/appointment/Appointments_Nav";
import Make_Appointment from "../../screens/appointment/Make_Appointment";

const Stack = createStackNavigator();

const AppointmentNavigator = () => {
  return (
    <>
      <Stack.Screen
        name="Appointments_Nav"
        component={Appointments_Nav}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Make_Appointment"
        component={Make_Appointment}
        options={{
          headerShown: false,
        }}
      />
    </>
  );
};

export default AppointmentNavigator;