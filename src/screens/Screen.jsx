import LottieView from "lottie-react-native";
import React from "react";
import { StatusBar, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function Screen() {
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
