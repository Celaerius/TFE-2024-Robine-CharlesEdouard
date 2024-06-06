import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import ProfilScreen from "./screens/ProfilScreen";
import CustomBottomTab from "./components/BottomTabs/CustomBottomTab";
import SettingsScreen from "./screens/SettingsScreen";
import AwsomeFont5 from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeScreen") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Profil") {
            iconName = focused ? "heart" : "heart";
          } else if (route.name === "Settings") {
            iconName = focused ? "wrench" : "wrench";
          }
          return <AwsomeFont5 name={iconName} size={size} color={color} />;
        },
      })}
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
