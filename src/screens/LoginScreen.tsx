import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { APP_BACKGROUND } from "../constants/AppConstants";
import {
  AppFooter,
  AppHeader,
  ButtonComponent,
  ExtraMessageComponent,
  ImageComponent,
  PhoneNumberComponent,
} from "../component/index";

type Props = {};

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState<number>();
  return (
    <View style={styles.container}>
      <AppHeader />
      <ImageComponent />
      <ExtraMessageComponent />
      <PhoneNumberComponent
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
      <ButtonComponent
        title="Send OTP"
        onPress={() => {
          navigation.navigate("OtpVerificationScreen", {
            phoneNumber: phoneNumber,
          });
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
