import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

const circleContainerSize = 50;

const AnimatedCircle = function ({ circleX }) {
  const circleContainerStyle = useAnimatedStyle(function () {
    console.log("circleX", circleX.value);
    return {
      transform: [{ translateX: circleX.value - circleContainerSize / 2 }],
    };
  }, []);

  return (
    <Animated.View
      style={[circleContainerStyle, styles.container]}
    ></Animated.View>
  );
};

export default AnimatedCircle;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -circleContainerSize / 1.1,
    width: circleContainerSize,
    borderRadius: circleContainerSize,
    height: circleContainerSize,
    backgroundColor: "#0ea5e9",
    justifyContent: "center",
    alignItems: "center",
  },
});
