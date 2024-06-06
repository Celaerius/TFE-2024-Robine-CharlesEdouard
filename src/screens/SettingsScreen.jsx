import React from "react";
import { StatusBar, View } from "react-native";
import LogoutButton from "../components/LogoutButton";
import UserForm from "../components/UserForm";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <LogoutButton />
      </View>
      <UserForm />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    padding: 10,
    backgroundColor: "#f1f1f1",
  },
  title: {
    fontSize: 24,
  },
};
