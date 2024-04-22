import React from "react";
import {
  Pressable,
  Text,
  StyleProp,
  ViewStyle,
  StyleSheet,
  PressableProps,
} from "react-native";
import { View } from "react-native-reanimated";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ICON_LIBRARY = {
  Feather: () => Feather,
  MaterialCommunityIcons: () => MaterialCommunityIcons,
};

const IconButton = ({
  icon,
  iconFamily = "Feather",
  variant = "contained",
  size = "medium",
  iconColor = "black",
  roundness = "medium",
  style = {},
  onPress,
  ...rest
}) => {
  const Icon = ICON_LIBRARY[iconFamily]();
  const iconSize = size === "big" ? 24 : size === "medium" ? 16 : 12;
  const borderRadius = size === "big" ? 48 : size === "medium" ? 36 : 24;

  const buttonStyles = [
    styles.button,
    styles[`${variant}Button`],
    styles[`${roundness}Roundness`],
    { width: buttonSize, height: buttonSize },
    style,
  ];

  return (
    <Pressable
      {...rest}
      onPress={onPress}
      style={({ pressed }) => [
        buttonStyles,
        pressed && styles.buttonPressed,
        pressed && styles.shadow,
      ]}
    >
      <Icon name={icon} size={iconSize} color={iconColor} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.9,
  },
  containedButton: {
    backgroundColor: "#2196F3",
  },
  textButton: {
    backgroundColor: "transparent",
  },
  outlinedButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#2196F3",
  },
  fullRoundness: {
    borderRadius: 100,
  },
  mediumRoundness: {
    borderRadius: 20,
  },
  smallRoundness: {
    borderRadius: 10,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
});
