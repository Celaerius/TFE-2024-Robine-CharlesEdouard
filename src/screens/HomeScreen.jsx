import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { PanResponder, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function HomeScreen() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, { dx, dy }) => {
        translateX.value = dx;
        translateY.value = dy;
      },
      onPanResponderRelease: (_, { dx }) => {
        if (Math.abs(dx) > 120) {
          // If swipe distance is greater than 120, animate the card off the screen
          translateX.value = withSpring(dx > 0 ? 400 : -400);
        } else {
          // Otherwise, reset card position
          translateX.value = withSpring(0);
          translateY.value = withSpring(0);
        }
      },
    })
  ).current;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <PanGestureHandler onGestureEvent={panResponder?.current?.panHandlers}>
        <Animated.View style={[styles.card, animatedStyle]} />
      </PanGestureHandler>
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
  card: {
    width: 300,
    height: 400,
    backgroundColor: "skyblue",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
};
