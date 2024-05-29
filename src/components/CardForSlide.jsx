import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../features/slices/Users";
import { useSelector } from "react-redux";

const CardForSlide = ({ user }) => {
  return (
    <View style={styles.card}>
      <View style={{ alignContent: "center", justifyContent: "center" }}>
        <LottieView
          style={{ height: 200, width: 200 }}
          source={require("../../assets/animations/LottieLego.json")}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Text style={{ fontSize: 25 }}>{user.name}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <LottieView
          style={{ height: 60, width: 60 }}
          source={require("../../assets/animations/LottieLego.json")}
        />
        <LottieView
          style={{ height: 60, width: 60 }}
          source={require("../../assets/animations/LottieLego.json")}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <LottieView
          style={{ height: 60, width: 60 }}
          source={require("../../assets/animations/LottieLego.json")}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <LottieView
          style={{ height: 60, width: 60 }}
          source={require("../../assets/animations/LottieLego.json")}
        />
        <LottieView
          style={{ height: 60, width: 60 }}
          source={require("../../assets/animations/LottieLego.json")}
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <LottieView
          style={{ height: 60, width: 60 }}
          source={require("../../assets/animations/LottieLego.json")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 5,
  },
});

export default CardForSlide;
