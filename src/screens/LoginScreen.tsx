import { View, StyleSheet } from "react-native";
import React from "react";
import AppHeader from "../component/AppHeader";
import ImageComponent from "../component/ImageComponent";
import { APP_BACKGROUND } from "../constants/AppConstants";
import PhoneNumberComponent from "../component/PhoneNumberComponent";
import ExtraMessageComponent from "../component/ExtraMessageComponent";
import ButtonComponent from "../component/ButtonComponent";
import AppFooter from "../component/AppFooter";

type Props = {};

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AppHeader />
      <ImageComponent />
      <ExtraMessageComponent />
      <PhoneNumberComponent />
      <ButtonComponent
        title="Send OTP"
        onPress={() => {
          navigation.navigate("OtpVerificationScreen");
        }}
      />
      <AppFooter />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_BACKGROUND,
  },
});

export default LoginScreen;
