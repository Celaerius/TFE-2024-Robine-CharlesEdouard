import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { fetchMatches } from "../../features/slices/Matches";

export default function ProfilScreen() {
  const matches = useSelector((state) => state.matches.matches);
  const dispatch = useDispatch();
  const [id, setId] = useState("");

  const getMatches = async () => {
    await dispatch(fetchMatches()).unwrap();
  };

  const getId = async () => {
    const value = await AsyncStorage.getItem("my-id");
    setId(value);
  };

  useEffect(() => {
    getId();
    getMatches();
  }, []);

  console.log("id", id);
  console.log("matches", matches[0]?.user2.id);

  useEffect(() => {
    switch (id) {
      case matches[0]?.user1.id:
        console.log("1", matches);
        break;
      case matches[0]?.user2.id:
        console.log("2", matches);
        break;
      default:
        console.log("default", matches);
    }
  }, [matches]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={"#1a6985"}
        translucent={true}
      />
      <Animated.View
        entering={FadeInUp.duration(1000).springify()}
        style={styles.content}
      >
        <Text style={styles.title}>List of Matches</Text>
        {/* {matches.user1_id == id
          ? (console.log("1", matches),
            matches?.user2?.map(
              (match) => (
                console.log("match", match),
                (
                  <Text key={match.id} style={styles.matchText}>
                    {match.name}
                  </Text>
                )
              )
            )) */}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  content: {
    backgroundColor: "#1a6985",
    borderRadius: 16,
    padding: 20,
    width: "90%",
    alignItems: "center",
    elevation: 10,
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
  matchText: {
    color: "#FFF",
    fontSize: 18,
    marginBottom: 10,
  },
});
