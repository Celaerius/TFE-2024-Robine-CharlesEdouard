import React from "react";
import { StatusBar, Text, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMatches } from "../../features/slices/Matches";

export default function ProfilScreen() {
  const matches = useSelector((state) => state.matches.matches);
  const dispatch = useDispatch();

  console.log("matches", matches);

  const getMatches = async () => {
    dispatch(fetchMatches());
  };

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Animated.View style={FadeInUp}>
        <Text style={styles.title}>List of Matches</Text>
        {matches?.map((match) => (
          <Text key={match.id}>{match.name}</Text>
        ))}
      </Animated.View>
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
