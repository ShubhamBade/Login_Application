import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../utils/responsiveDimension";
import { HEADER_TEXT_COLOR, LOGIN_TEXT } from "../constants/AppConstants";

type Props = {
  title?:string,
  onPress?:()=>void,
};

const ButtonComponent = ({title,onPress}: Props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonStyle} onPress={onPress}>
        <ImageBackground
          source={require("../assets/login_button.jpg")}
          style={{
            height: responsiveHeight(7),
            width: responsiveWidth(75),
            justifyContent: "center",
            alignItems: "center",
          }}
          borderRadius={responsiveWidth(8)}
        >
          <Text style={styles.textStyle}>{title}</Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(15),
    width: responsiveWidth(100),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    height: responsiveHeight(7),
    width: responsiveWidth(75),
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: responsiveFontSize(4.5),
    color: HEADER_TEXT_COLOR,
    fontWeight: "bold",
  },
});

export default ButtonComponent;
