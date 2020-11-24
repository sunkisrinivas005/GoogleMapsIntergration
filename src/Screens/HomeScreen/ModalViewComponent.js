import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";




const styles = StyleSheet.create({
    mainContainer : {
        width:"100%", 
        height:250,
        display:"flex", 
        flexDirection:"column",
         justifyContent:"center",
          alignItems:"center"
    },
    header : {
        fontFamily:"Lato", 
        fontSize:18, 
        fontWeight:"bold", 
        margin:5, 
        padding:5
    },
    subContainer : {
        display:"flex", flexDirection:"row"
    },
    imageStyles : {
        width:80,
        height:80, 
        alignSelf:"center", 
        borderRadius:10, 
        padding:10, 
        margin:10
    },
    fontStyles : {
        fontFamily:"Lato",
        fontSize:16, 
        fontWeight:"bold"
    }
   });

const ModalViewComponent = () => {
    return(
        <View style = {styles.mainContainer}>
        <Text style ={styles.header}>We Found a Driver</Text>
        <Text style ={[styles.header, {marginBottom:10, color:"#ed1c24"}]}>Driver will Pickup you in 02:35</Text>
        <View style = {styles.subContainer}>
          <Image
          style={styles.imageStyles}
          source={require('../../../icons/callImage.webp')}
          />
        <Image
        style={styles.imageStyles}
        source={require('../../../icons/userImage.jpeg')}
      />
       <Image
          style={styles.imageStyles}
          source={require('../../../icons/messageImage.jpg')}
          />
        </View>
        <View style = {{justifyContent:"center", alignItems:"center"}}>
          <Text style ={[styles.fontStyles,{fontSize:18}]}>Suarez Milta</Text>
          <View style = {{flexDirection:"row"}}>
            <Text style = {styles.fontStyles}>
              ST3751 - 
            </Text>
            <Text style ={[styles.fontStyles, {color:"#949494",marginLeft:2}]}>
              Land Rover 
            </Text>
          </View>
        </View>
      </View>
    )
}

export default ModalViewComponent