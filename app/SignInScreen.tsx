import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  ImageBackground
} from "react-native";
import CustomButton from "../components/AuthComponents/CustomButton";
import CustomInput from "../components/AuthComponents/CustomInput";
import SocialSignInButtons from "../components/AuthComponents/SocialSignInButtons";
import { useForm } from "react-hook-form";
import { Link } from "expo-router";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignInScreen = () => {

  const [loading, setLoading] = useState(false);

  const { control, handleSubmit } = useForm();

  const onSignInPressed = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    // Sign in

    setLoading(false);
  };

  const onForgotPasswordPressed = () => {
    // navigation.navigate("ForgotPassword");
  };

  const onSignUpPress = () => {
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
      <ImageBackground source={require("./space.png")} resizeMode="cover">
      <Image source={require("./logo.png")} style={styles.logo} resizeMode="cover" />
      <View style={styles.container}>
        <CustomInput
          name="email"
          placeholder="Email"
          placeholderTextColor={"#b4b4b4"}
          control={control}
          rules={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
          }}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          placeholderTextColor={"#b4b4b4"}
          secureTextEntry
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 3,
              message: "Password should be minimum 3 characters long",
            },
          }}
        />

        <CustomButton
          text={loading ? "Loading..." : "Sign In"}
          onPress={handleSubmit(onSignInPressed)}
          bgColor={"#AE46AA"}
        />

        <Link href=".../SignUpScreen/index" asChild>
        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        </Link>

        <SocialSignInButtons />

        <Link href=".../SignUpScreen/index" asChild>
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
        </Link>
      </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "black",
    minHeight: "100%",
  },
  container: {
    padding: 20,
  },
  logo: {
    width: "100%",
    height: undefined,
    aspectRatio: 16 / 9,
  },
});

export default SignInScreen;
