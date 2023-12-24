import { View, Image,StyleSheet } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from '../utils/responsiveDimension'

type Props = {}

const ImageComponent = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/loginImage.png")} 
      style={{
        height:responsiveHeight(30),
        width:responsiveWidth(70),
        resizeMode:'cover'
      }}
      />
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        height:responsiveHeight(35),
        width:responsiveWidth(100),
        justifyContent:'center',
        // backgroundColor:'pink',
        alignItems:'center'
    }
})
export default ImageComponent