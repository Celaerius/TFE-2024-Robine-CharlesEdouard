import { useEffect, useState } from "react";
import { Animated, Dimensions, PanResponder, View } from "react-native";
import CardForSlide from "./CardForSlide";
import { set } from "react-hook-form";

const SwipableCards = (props) => {
  const SCREEN_HEIGHT = Dimensions.get("window").height;
  const SCREEN_WIDTH = Dimensions.get("window").width;
  const [isRightSwipe, setIsRightSwipe] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const position = new Animated.ValueXY();

  const rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ["-30deg", "0deg", "10deg"],
    extrapolate: "clamp",
  });
  const rotateAndTranslate = {
    transform: [
      {
        rotate: rotate,
      },
      ...position.getTranslateTransform(),
    ],
  };

  const nextCardPadding = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [0, 20, 0],
    extrapolate: "clamp",
  });
  const nextCardTopPosition = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [0, 65, 0],
    extrapolate: "clamp",
  });
  const thirdCardPadding = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [20, 34, 20],
    extrapolate: "clamp",
  });
  const thirdCardTopPosition = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [65, 85, 65],
    extrapolate: "clamp",
  });
  const fourthCardOpacity = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 1],
    extrapolate: "clamp",
  });

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      position.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > 120) {
        Animated.spring(position, {
          toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
          useNativeDriver: false,
        }).start(() => {
          setIsRightSwipe(true);
          props.onAccepted(props.users[currentIndex].id, isRightSwipe);
          setCurrentIndex(currentIndex + 1);
          position.setValue({ x: 0, y: 0 });
        });
      } else if (gestureState.dx < -120) {
        Animated.spring(position, {
          toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
          useNativeDriver: false,
        }).start(() => {
          setIsRightSwipe(false);
          props.onDeclined(props.users[currentIndex].id, isRightSwipe);
          setCurrentIndex(currentIndex + 1);
          position.setValue({ x: 0, y: 0 });
        });
      } else {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          friction: 4,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  useEffect(() => {
    if (currentIndex === props.users.length) props.onEnded();
  }, [currentIndex]);

  return (
    <View>
      {props.users
        .map((user, index) => {
          if (index === currentIndex) {
            return (
              <Animated.View
                {...panResponder.panHandlers}
                key={user.id}
                style={[
                  rotateAndTranslate,
                  { width: "100%", position: "absolute" },
                ]}
              >
                <CardForSlide user={user} />
              </Animated.View>
            );
          } else if (index === currentIndex + 1) {
            return (
              <Animated.View
                key={user.id}
                style={{
                  height: SCREEN_HEIGHT - 120,
                  width: "100%",
                  paddingHorizontal: nextCardPadding,
                  position: "absolute",
                  top: nextCardTopPosition,
                }}
              >
                <CardForSlide user={user} />
              </Animated.View>
            );
          } else if (index === currentIndex + 2) {
            return (
              <Animated.View
                key={user.id}
                style={{
                  height: SCREEN_HEIGHT - 120,
                  width: "100%",
                  paddingHorizontal: thirdCardPadding,
                  position: "absolute",
                  top: thirdCardTopPosition,
                }}
              >
                <CardForSlide user={user} />
              </Animated.View>
            );
          } else if (index === currentIndex + 3) {
            return (
              <Animated.View
                key={user.id}
                style={{
                  opacity: fourthCardOpacity,
                  height: SCREEN_HEIGHT - 120,
                  width: "100%",
                  paddingHorizontal: 34,
                  position: "absolute",
                  top: 85,
                }}
              >
                <CardForSlide user={user} />
              </Animated.View>
            );
          } else {
            return null;
          }
        })
        .reverse()}
    </View>
  );
};

export default SwipableCards;
