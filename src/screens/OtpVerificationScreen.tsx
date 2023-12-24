import { View, StyleSheet } from "react-native";
import React from "react";
import AppHeader from "../component/AppHeader";
import ImageComponent from "../component/ImageComponent";
import {
  APP_BACKGROUND,
  TOAST_MESSAGE,
  VERIFY_TEXT,
} from "../constants/AppConstants";
import PhoneNumberComponent from "../component/PhoneNumberComponent";
import ExtraMessageComponent from "../component/ExtraMessageComponent";
import ButtonComponent from "../component/ButtonComponent";
import AppFooter from "../component/AppFooter";
import { Toast } from "react-native-toast-message/lib/src/Toast";

type Props = {};

const OtpVerificationScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <AppHeader title={VERIFY_TEXT} />
      <ImageComponent />
      <ExtraMessageComponent flag={true} />
      <PhoneNumberComponent />
      <ButtonComponent
        title={VERIFY_TEXT}
        onPress={() => {
          Toast.show({
            type: "success",
            text1: TOAST_MESSAGE,
            position: "top",
          });
        }}
      />
      <AppFooter />
      <Toast />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_BACKGROUND,
  },
});

export default OtpVerificationScreen;
