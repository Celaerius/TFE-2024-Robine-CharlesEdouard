import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Provider, useSelector } from "react-redux";
import BottomTabs from "./src/BottomTabs";
import LoginScreen from "./src/screens/Login";
import LoginForm from "./src/screens/LoginForm";
import store from "./app/store";

export default function App() {
  const Stack = createStackNavigator();

  const AppNav = () => {
    const token = useSelector((state) => state.authentication.token);
    console.log(token);
    if (token === null || token === undefined) {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginForm"
            component={LoginForm}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      );
    } else {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={BottomTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      );
    }
  };

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <AppNav />
      </NavigationContainer>
    </Provider>
  );
}
