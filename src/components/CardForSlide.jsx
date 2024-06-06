import LottieView from "lottie-react-native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CardForSlide = ({ user }) => {
  return (
    <View style={styles.card}>
      <View style={styles.profileContainer}>
        {user.profile_picture ? (
          <Image
            style={styles.profilePicture}
            source={{ uri: user.profile_picture }}
          />
        ) : (
          <LottieView
            style={styles.profilePicture}
            source={require("../../assets/animations/LottieLego.json")}
          />
        )}
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <View style={styles.lottieRow}>
        <LottieView
          style={styles.lottieSmall}
          source={require("../../assets/animations/LottieLego.json")}
        />
        <LottieView
          style={styles.lottieSmall}
          source={require("../../assets/animations/LottieLego.json")}
        />
      </View>
      <View style={styles.lottieRow}>
        <LottieView
          style={styles.lottieSmall}
          source={require("../../assets/animations/LottieLego.json")}
        />
      </View>
      <View style={styles.lottieRow}>
        <LottieView
          style={styles.lottieSmall}
          source={require("../../assets/animations/LottieLego.json")}
        />
        <LottieView
          style={styles.lottieSmall}
          source={require("../../assets/animations/LottieLego.json")}
        />
      </View>
      <View style={styles.lottieRow}>
        <LottieView
          style={styles.lottieSmall}
          source={require("../../assets/animations/LottieLego.json")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1a6985",
    borderRadius: 16,
    padding: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 10,
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  profilePicture: {
    height: 200,
    width: 200,
  },
  nameContainer: {
    justifyContent: "center",
    marginVertical: 10,
    marginLeft: 20,
  },
  name: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "700",
  },
  lottieRow: {
    flexDirection: "row",
    marginVertical: 5,
  },
  lottieSmall: {
    height: 60,
    width: 60,
    marginHorizontal: 10,
  },
});

export default CardForSlide;
