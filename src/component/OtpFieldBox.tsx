import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../utils/responsiveDimension";
import { INPUT_TEXT_COLOR } from "../constants/AppConstants";

type Props = {};

const OtpFieldBox = (props: Props) => {
  const otp = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      {otp.map((item, index) => {
        return (
          <TextInput
            style={styles.otp}
            key={index}
            inputMode="numeric"
            maxLength={1}
          />
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(15),
    width: responsiveWidth(90),
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  otp: {
    height: responsiveWidth(15),
    width: responsiveWidth(15),
    margin: responsiveWidth(2),
    borderRadius: responsiveWidth(5),
    fontSize: responsiveFontSize(5),
    textAlign: "center",
    marginBottom: responsiveHeight(5),
    borderColor: INPUT_TEXT_COLOR,
    borderWidth: responsiveWidth(1),
    color: INPUT_TEXT_COLOR,
  },
});

export default OtpFieldBox;
