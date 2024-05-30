import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../features/slices/Users";
import SwipableCards from "../components/CardStack";
import { sendSwipe } from "../../features/slices/Swip";
import { useState } from "react";

export default function HomeScreen() {
  const translateX = useSharedValue(0);
  const users = useSelector((state) => state.users.users);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const getUsers = () => {
    dispatch(fetchUsers());
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    dispatch(sendSwipe(data));
  }, [data]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.appName}>Gamer Space</Text>
      <View style={styles.container2}>
        {users && (
          <SwipableCards
            users={users}
            setData={setData}
            data={data}
            onDeclined={(isRightSwipe) => {
              console.log("declined");
            }}
            onAccepted={(isRightSwipe) => {
              console.log("accepted");
            }}
            onEnded={() => {}}
          />
        )}
      </View>
    </View>
  );
}

const styles = {
  container2: {
    flex: 1,
    width: "100%",
    padding: 60,
  },
  container: {
    backgroundColor: "#FFF",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  card: {
    width: 300,
    height: 550,
    backgroundColor: "#1a6985",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 70,
  },
};
