import { View, StyleSheet } from "react-native";
import React from "react";
import {
  APP_BACKGROUND,
  TOAST_MESSAGE,
  VERIFY_TEXT,
} from "../constants/AppConstants";
import {
  AppFooter,
  AppHeader,
  ButtonComponent,
  ExtraMessageComponent,
  ImageComponent,
  OtpFieldBox,
} from "../component/index";
import { Toast } from "react-native-toast-message/lib/src/Toast";

type Props = {};

const OtpVerificationScreen = ({ route }) => {
  const { phoneNumber } = route.params;
  return (
    <View style={styles.container}>
      <AppHeader title={VERIFY_TEXT} />
      <ImageComponent />
      <ExtraMessageComponent flag={true} phoneNumber={phoneNumber} />
      <OtpFieldBox />
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
