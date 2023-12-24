import { View, Text,StyleSheet} from "react-native";
import React from "react";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../utils/responsiveDimension";
import { HEADER_TEXT_COLOR } from "../constants/AppConstants";

type Props = {
  title?: string;
};

const AppHeader = ({ title = "Log in" }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};
const styles=StyleSheet.create({
    container:{
        height:responsiveHeight(15),
        width:responsiveWidth(100),
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        fontSize:responsiveFontSize(6),
        color:HEADER_TEXT_COLOR,
        fontWeight:'bold'
    }
})

export default AppHeader;
