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
import { Controller, set } from "react-hook-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onsubmit = (data) => {
    if (data) {
      setEmail(data.email);
      setPassword(data.password);
    }
    HandleLogin();
  };

  const HandleLogin = () => {
    navigation.navigate("AppStack");
  };

  const CreateAccount = () => {
    navigation.navigate("CreateAccount");
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
              entering={FadeInDown.duration(1000).delay(200).springify()}
              style={styles.formInput}
            >
              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor={"gray"}
                    value={field.value}
                    onChangeText={(text) => {
                      field.onChange(text);
                    }}
                  />
                )}
                name="email"
              />
            </Animated.View>
            {errors.email ? (
              <Animated.Text
                entering={FadeIn.duration(1000).delay(200).springify()}
                style={{ color: "#FF6161", paddingBottom: 12 }}
              >
                {errors.email?.message}
              </Animated.Text>
            ) : null}
            <Animated.View
              entering={FadeInDown.duration(1000).delay(400).springify()}
              style={[styles.formInput, { marginBottom: 12 }]}
            >
              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor={"gray"}
                    value={field.value}
                    onChangeText={(text) => {
                      field.onChange(text);
                    }}
                    secureTextEntry={true}
                  />
                )}
                name="password"
              />
            </Animated.View>
            {errors.password ? (
              <Animated.Text
                entering={FadeIn.duration(1000).delay(200).springify()}
                style={{ color: "#FF6161", paddingBottom: 12 }}
              >
                {errors.password?.message}
              </Animated.Text>
            ) : null}
            <Animated.View
              entering={FadeInDown.duration(1000).delay(600).springify()}
              style={styles.loginButtonContainer}
            >
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleSubmit(onsubmit)}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
          <View style={styles.newAccount}>
            <Animated.View
              entering={FadeInDown.duration(1000).delay(800).springify()}
            >
              <Text style={{ color: "white", marginRight: 10, fontSize: 16 }}>
                No account ?
              </Text>
            </Animated.View>
            <Animated.View
              entering={FadeInDown.duration(1000).delay(800).springify()}
            >
              <TouchableOpacity onPress={CreateAccount}>
                <Text
                  style={{ color: "#51abcb", marginRight: 10, fontSize: 16 }}
                >
                  Create One !
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
