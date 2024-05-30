import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { AccesLogout } from "../../features/slices/Authentication";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logout } from "../../features/slices/Authentication";

export default function LogoutButton() {
  const dispatch = useDispatch();

  const Disconnect = () => {
    AsyncStorage.removeItem("my-key");
    AsyncStorage.removeItem("my-id");
    dispatch(logout());
  };

  return (
    <TouchableOpacity
      style={{ backgroundColor: "#51abcb", borderRadius: 10, padding: 10 }}
      onPress={() => Disconnect()}
    >
      <Text style={{ fontSize: 18, color: "white" }}>Logout</Text>
    </TouchableOpacity>
  );
}
