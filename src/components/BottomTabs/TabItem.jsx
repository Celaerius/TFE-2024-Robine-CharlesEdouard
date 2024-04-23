import React, { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Feather from "react-native-vector-icons/Feather";
import { SCREEN_WIDTH } from "../../constants/Screen";
import usePath from "../../hooks/usePath";
import { getPathXCenterByIndex } from "../../utils/Path";

const ICON_SIZE = 25;
const LABEL_WIdth = SCREEN_WIDTH / 3;
const AnimatedIcon = Animated.createAnimatedComponent(Feather);

const TabItem = function ({ label, icon, index, activeIndex, onTabPress }) {
  const { curvedPath } = usePath();
  const animatedActiveIndex = useSharedValue(activeIndex);
  const iconPosition = getPathXCenterByIndex(curvedPath, index);
  const labelPosition = getPathXCenterByIndex(curvedPath, index);

  const tabStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? -35 : 20;
    const iconPositionX = iconPosition - index * ICON_SIZE;
    console.log(labelPosition);
    return {
      width: ICON_SIZE,
      height: ICON_SIZE,
      transform: [
        { translateY: withTiming(translateY) },
        { translateX: iconPositionX - ICON_SIZE / 2 },
      ],
    };
  });
  const labelContainerStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? 36 : 36;
    return {
      transform: [
        { translateY: withTiming(translateY) },
        { translateX: labelPosition - LABEL_WIdth / 2 },
      ],
    };
  });
  const iconColor = useSharedValue(
    activeIndex === index + 1 ? "white" : "rgba(128, 128, 128, 0.8)"
  );

  useEffect(() => {
    animatedActiveIndex.value = activeIndex;
    if (activeIndex === index + 1) {
      iconColor.value = withTiming("white");
    } else {
      iconColor.value = withTiming("rgba(128, 128, 128, 0.8)");
    }
  }, [activeIndex]);

  const animatedIconProps = useAnimatedProps(() => {
    return {
      color: iconColor.value,
    };
  });
  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={[tabStyle]}>
        <Pressable
          testID={`tab${label}`}
          hitSlop={{ top: 30, bottom: 30, left: 50, right: 50 }}
          onPress={onTabPress}
        >
          <AnimatedIcon
            name={icon}
            size={25}
            animatedProps={animatedIconProps}
          />
        </Pressable>
      </Animated.View>
      <Animated.View style={[labelContainerStyle, styles.labelContainer]}>
        <Text style={styles.label}>{label}</Text>
      </Animated.View>
    </View>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  labelContainer: {
    position: "absolute",
    width: LABEL_WIdth / 2,
    // alignItems: "center",
  },
  label: {
    fontSize: 17,
    color: "rgba(128, 128, 128, 0.8)",
  },
});
