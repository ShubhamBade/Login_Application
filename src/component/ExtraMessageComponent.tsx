import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../utils/responsiveDimension";
import { FOOTER_TEXT_COLOR } from "../constants/AppConstants";

type Props = {
  flag?: boolean;
};
const DARK_TEXT_COLOR = "#000";
const ExtraMessageComponent = ({ flag = false }: Props) => {
  return (
    <View style={styles.container}>
      {flag ? (
        <>
          <Text style={styles.textStyle}>OTP send to</Text>
          <Text
            style={[
              styles.textStyle,
              {
                color: DARK_TEXT_COLOR,
              },
            ]}
          >
            +91 9657007719{" "}
          </Text>
        </>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(10),
    width: responsiveWidth(100),
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: responsiveFontSize(4.5),
    marginBottom: responsiveHeight(0.5),
    fontWeight: "bold",
    color: FOOTER_TEXT_COLOR,
  },
});

export default ExtraMessageComponent;
