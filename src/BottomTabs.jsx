import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import ProfilScreen from "./screens/ProfilScreen";
import CustomBottomTab from "./components/BottomTabs/CustomBottomTab";
import Screen from "./screens/Screen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
    // tabBar={(props) => {
    //   return <CustomBottomTab {...props} />;
    // }}
    >
      <Tab.Group screenOptions={{ headerShown: false }}>
        <Tab.Screen
          options={{ tabBarLabel: "Home" }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{ tabBarLabel: "Profil" }}
          name="Profil"
          component={ProfilScreen}
        />
        <Tab.Screen
          options={{ tabBarLabel: "Settings" }}
          name="Settings"
          component={Screen}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}
