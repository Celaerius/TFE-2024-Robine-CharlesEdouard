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
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeIn,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const navigation = useNavigation();

  const HandleCreate = () => {
    navigation.navigate("Login");
  };

  const Connect = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={"transparent"}
        translucent={true}
      />
      <Animated.View entering={FadeIn.duration(1000)}>
        <LottieView
          position="absolute"
          height={300}
          width={700}
          left={-100}
          top={0}
          style={styles.bgImage}
          source={require("../../assets/animations/BackgrounLogin.json")}
          autoPlay
          keepLastFrame={true}
        />
      </Animated.View>
      <Animated.View entering={FadeInUp.duration(1000).delay(500).springify()}>
        <LottieView
          height={300}
          width={300}
          position="absolute"
          left={50}
          source={require("../../assets/animations/mascot1.json")}
          autoPlay
          loop
        />
      </Animated.View>
      <View style={styles.formContainer}>
        <Animated.View
          style={styles.formCard}
          entering={FadeInDown.duration(1000).springify()}
        >
          <View style={styles.formTitle}>
            <Animated.Text
              entering={FadeInUp.duration(1000).delay(200).springify()}
              style={styles.title}
            >
              Gaming Space
            </Animated.Text>
          </View>
          <View style={styles.formInputContainer}>
            <Animated.View
              entering={FadeInDown.duration(1000).delay(300).springify()}
              style={styles.formInput}
            >
              <TextInput
                placeholder="Username"
                placeholderTextColor={"gray"}
                value={userName}
                onChangeText={setUserName}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.duration(1000).delay(400).springify()}
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
              entering={FadeInDown.duration(1000).delay(500).springify()}
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
                onPress={() => HandleCreate()}
              >
                <Text style={styles.loginButtonText}>Create</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
          <View style={styles.newAccount}>
            <Animated.View
              entering={FadeInDown.duration(1000).delay(800).springify()}
            >
              <Text style={{ color: "white", marginRight: 10, fontSize: 16 }}>
                Already have an account ?
              </Text>
            </Animated.View>
            <Animated.View
              entering={FadeInDown.duration(1000).delay(800).springify()}
            >
              <TouchableOpacity onPress={Connect}>
                <Text
                  style={{ color: "#51abcb", marginRight: 10, fontSize: 16 }}
                >
                  Connect !
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </Animated.View>
      </View>
    </ScrollView>
  );
}

const styles = {
  container: {
    backgroundColor: "#FFF",
    height: "100%",
    width: "100%",
  },
  formContainer: {
    justifyContent: "space-around",
    paddingTop: 350,
  },
  formCard: {
    backgroundColor: "#1a6985",
    borderRadius: 16,
    paddingTop: 20,
    paddingBottom: 20,
    marginHorizontal: 20,
    elevation: 10,
    marginBottom: 20,
  },
  formTitle: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    color: "#fff",
    fontWeight: "700",
    letterSpacing: 0.05,
    fontSize: 44,
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
  newAccount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
  },
};
