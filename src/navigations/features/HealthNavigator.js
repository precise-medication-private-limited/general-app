import { createStackNavigator } from "@react-navigation/stack";

// Health screens
import Edit_Medical_History from "../../breast-cancer/screens/Edit_Medical_History";

const Stack = createStackNavigator();

const HealthNavigator = () => {
  return (
    <>
      {/* Health History */}
      <Stack.Screen
        name="Edit_Medical_History"
        component={Edit_Medical_History}
        options={{
          headerShown: false,
        }}
      />
    </>
  );
};

export default HealthNavigator;