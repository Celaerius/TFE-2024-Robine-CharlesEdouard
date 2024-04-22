import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./src/BottomTabs";
import LoginScreen from "./src/screens/Login";

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createStackNavigator();

  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AppStack"
            component={BottomTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
