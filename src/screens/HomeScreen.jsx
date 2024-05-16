import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import CardForSlide from "../components/CardForSlide";
import { runOnJS } from "react-native-reanimated";

export default function HomeScreen() {
  const [cards, setCards] = useState([0]);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
    },
    onEnd: (event) => {
      if (Math.abs(event.translationX) > 120) {
        translateX.value = withSpring(
          event.translationX > 0 ? 400 : -400,
          {
            damping: 10,
          },
          () => {
            runOnJS(handleCardSwiped)();
          }
        );
      } else {
        translateX.value = withSpring(0);
      }
    },
  });

  const handleCardSwiped = () => {
    setCards((prevCards) => {
      const newCards = prevCards.slice(1);
      newCards.push(prevCards.length);
      return newCards;
    });
    translateX.value = 0;
    translateY.value = 0;
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {cards.map((card, index) => (
        <PanGestureHandler key={index} onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.card, animatedStyle]}>
            <CardForSlide profil={card} />
          </Animated.View>
        </PanGestureHandler>
      ))}
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
    height: 550,
    backgroundColor: "skyblue",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
};
