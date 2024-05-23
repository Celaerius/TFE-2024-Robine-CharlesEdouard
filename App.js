import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import BottomTabs from "./src/BottomTabs";
import LoginScreen from "./src/screens/Login";
import LoginForm from "./src/screens/LoginForm";

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createStackNavigator();

  const AppNav = () => {
    const token = useSelector((state) => state.authentication.token);
    if (token === null) {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="LoginForm" component={LoginForm} />
        </Stack.Navigator>
      );
    } else {
      return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={BottomTabs} />
        </Tab.Navigator>
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
