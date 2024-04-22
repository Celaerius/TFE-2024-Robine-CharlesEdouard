import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  ScrollView,
} from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const HandleLogin = () => {
    navigation.navigate("AppStack");
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={"transparent"}
        translucent={true}
      />
      <Image
        style={styles.bgImage}
        source={require("../../assets/background.png")}
      />
      <View style={styles.lampContainer}>
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={styles.lamp1}
          source={require("../../assets/light.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          style={styles.lamp2}
          source={require("../../assets/light.png")}
        />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formTitle}>
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            style={styles.title}
          >
            Login
          </Animated.Text>
        </View>
        <View style={styles.formInputContainer}>
          <Animated.View
            entering={FadeInDown.duration(1000).delay(200).springify()}
            style={styles.formInput}
          >
            <TextInput
              placeholder="Email"
              placeholderTextColor={"gray"}
              value={email}
              onChangeText={setEmail}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(1000).delay(400).springify()}
            style={[styles.formInput, { marginBottom: 12 }]}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(1000).delay(600).springify()}
            style={styles.loginButtonContainer}
          >
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => HandleLogin()}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = {
  container: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
  bgImage: {
    width: "100%",
    height: 850,
    position: "absolute",
  },
  lampContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  lamp1: {
    height: 250,
    width: 100,
  },
  lamp2: {
    height: 175,
    width: 70,
  },
  formContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "space-around",
    paddingTop: 290,
    paddingBottom: 40,
  },
  formTitle: {
    alignItems: "center",
    marginBottom: 60,
  },
  title: {
    color: "#fff",
    fontWeight: "700",
    letterSpacing: 0.05,
    fontSize: 48,
    lineHeight: 56,
  },
  formInputContainer: {
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 16,
  },
  formInput: {
    backgroundColor: "#EDEDED",
    padding: 20,
    marginVertical: 8,
    width: "100%",
    borderRadius: 16,
  },
  loginButtonContainer: {
    width: "100%",
  },
  loginButton: {
    backgroundColor: "#38bdf8",
    padding: 12,
    marginBottom: 12,
    width: "100%",
    borderRadius: 16,
  },
  loginButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 28,
  },
};
