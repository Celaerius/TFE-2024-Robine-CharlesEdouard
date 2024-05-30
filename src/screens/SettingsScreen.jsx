import React from "react";
import { StatusBar, View } from "react-native";
import LogoutButton from "../components/LogoutButton";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <LogoutButton />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
};
