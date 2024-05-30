import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { StatusBar, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useDispatch } from "react-redux";
import { fetchMatches } from "../../features/slices/Matches";
import { useSelector } from "react-redux";

export default function Screen() {
  const dispatch = useDispatch();
  const matches = useSelector((state) => state.matches.matches);

  const getMatches = async () => {
    dispatch(fetchMatches());
  };

  useEffect(() => {
    getMatches();
  }, []);

  console.log("Screen", matches);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <LottieView
        style={{ width: 200, height: 200 }}
        source={require("../../assets/animations/LottieLego.json")}
        autoPlay
        loop
      />
      <LottieView
        style={{ width: 200, height: 200 }}
        source={require("../../assets/animations/SwipLeft.json")}
        autoPlay
        loop
      />
      <Animated.Text
        entering={FadeInUp.duration(1000).springify()}
        style={styles.title}
      >
        Welcome to the Screen
      </Animated.Text>
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
