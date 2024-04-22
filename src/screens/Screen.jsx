import React from "react";
import { StatusBar, Text, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function Screen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
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
