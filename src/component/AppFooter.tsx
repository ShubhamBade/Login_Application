import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils/responsiveDimension'
import { FOOTER_TEXT, FOOTER_TEXT_COLOR, HEADER_TEXT_COLOR } from '../constants/AppConstants'

type Props = {}

const AppFooter = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{FOOTER_TEXT}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(10),
    width:responsiveWidth(75),
    justifyContent: "center",
    alignItems: "center",
    alignSelf:'center'
  },
  textStyle: {
    fontSize: responsiveFontSize(4.2),
    color: FOOTER_TEXT_COLOR,
    textAlign:'center'
  },
});

export default AppFooter