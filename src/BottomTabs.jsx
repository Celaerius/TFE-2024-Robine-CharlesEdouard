import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import ProfilScreen from "./screens/ProfilScreen";
import CustomBottomTab from "./components/BottomTabs/CustomBottomTab";
import SettingsScreen from "./screens/SettingsScreen";

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
          options={{ tabBarLabel: "Matches" }}
          name="Profil"
          component={ProfilScreen}
        />
        <Tab.Screen
          options={{ tabBarLabel: "Settings" }}
          name="Settings"
          component={SettingsScreen}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}
