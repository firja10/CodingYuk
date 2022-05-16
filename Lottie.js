import React from "react";
import { StyleSheet, View, Text, Modal } from "react-native";
import LottieView from "lottie-react-native";
import { useState } from "react";
export default function Lottie() {
  return (
    <View style = {{backgroundColor:'#0C95FE', justifyContent:'center', alignItems:'center', flex:1}}>
      {/* <Modal
      onRequestClose={() => null}
      animationType="fade"
      transparent={true}
      style = {{justifyContent:'center', alignItems:'center', flex:1, alignContent:'center'}}
      > */}
      {/* <LottieView
        source={require("./src/67834-ssssttt-shut-up-the-cat-is-sleeping.json")}
        style={styles.animation}
        autoPlay
      /> */}

      <Text style = {{color:'#fff', fontWeight:'bold', fontSize:40, alignItems:'center', justifyContent:'center',  }}>
        MUTER
      </Text>
      {/* </Modal> */}

    </View>
  );
}
const styles = StyleSheet.create({
  animation: {
    width: 100,
    height: 100,
    alignItems:'center',
    justifyContent:'center'
  },
});