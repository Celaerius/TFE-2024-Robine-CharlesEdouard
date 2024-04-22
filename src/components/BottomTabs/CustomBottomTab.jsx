import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";

import { interpolatePath } from "react-native-redash";

import { SCREEN_WIDTH } from "../../constants/Screen";
import usePath from "../../hooks/usePath";
import { getPathXCenter } from "../../utils/Path";
import AnimatedCircle from "./AnimatedCircle";
import TabItem from "./TabItem";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const CustomBottomTab = ({ state, descriptors, navigation }) => {
  const { containerPath, curvedPath, tHeight } = usePath();
  const circleXCoordinate = useSharedValue(0);
  const progress = useSharedValue(1);
  const handleMoveCircle = (currentPath) => {
    circleXCoordinate.value = getPathXCenter(currentPath);
  };
  const selectIcon = (routeName) => {
    switch (routeName) {
      case "Home":
        return "home";
      case "Profil":
        return "user";
      case "Settings":
        return "settings";
    }
  };
  const animatedProps = useAnimatedProps(() => {
    const currentPath = interpolatePath(
      progress.value,
      Array.from({ length: curvedPath.length }, (_, index) => index + 1),
      curvedPath
    );
    runOnJS(handleMoveCircle)(currentPath);

    return { d: `${containerPath} ${currentPath}` };
  });
  const handleTabPress = (index, tab) => {
    navigation.navigate(tab);
    progress.value = withTiming(index);
  };
  return (
    <View style={styles.tabBarContainer}>
      <Svg width={SCREEN_WIDTH} height={tHeight} style={styles.shadowMd}>
        <AnimatedPath animatedProps={animatedProps} fill="black" />
      </Svg>
      <AnimatedCircle circleX={circleXCoordinate} />
      <View style={[styles.tabItemsContainer, { height: tHeight }]}>
        {state?.routes?.map((route, index) => {
          const { options } = descriptors[route.key];
          console.log(index);
          const label = options.tabBarLabel ? options.tabBarLabel : route.name;
          return (
            <TabItem
              key={route.key}
              label={label}
              icon={selectIcon(route.name)}
              activeIndex={state.index + 1}
              index={index}
              onTabPress={() => handleTabPress(index + 1, route.name)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default CustomBottomTab;

const styles = StyleSheet.create({
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: 2,
  },
  tabItemsContainer: {
    position: "absolute",
    flexDirection: "row",
    width: "100%",
  },
  shadowMd: {
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
