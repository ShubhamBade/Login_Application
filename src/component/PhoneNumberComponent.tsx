import { View, StyleSheet, TextInput } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../utils/responsiveDimension";
import {
  INPUT_BORDER_COLOR,
  INPUT_PLACEHOLDER,
  INPUT_TEXT_COLOR,
} from "../constants/AppConstants";

type Props = {
  phoneNumber: number;
  setPhoneNumber: Dispatch<SetStateAction<number>>;
};

const PhoneNumberComponent = (props: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={INPUT_PLACEHOLDER}
        maxLength={10}
        inputMode="numeric"
        style={styles.textInputStyle}
        onChangeText={(number) => {
          props.setPhoneNumber(parseInt(number));
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(12),
    width: responsiveWidth(100),
    justifyContent: "center",
    alignItems: "center",
  },
  textInputStyle: {
    width: responsiveWidth(75),
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(8),
    fontSize: responsiveFontSize(4.5),
    textAlign: "center",
    borderWidth: responsiveWidth(1),
    borderColor: INPUT_BORDER_COLOR,
    color: INPUT_TEXT_COLOR,
  },
});

export default PhoneNumberComponent;
