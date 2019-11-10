import React from 'react';

import { StyleSheet, View, Image } from "react-native";

const Footer = () => (
  <View style={styles.container}>
    <Image
      style={{ width: 28, height: 28, marginRight: 3 }}
      source={require("../assets/icons/house.png")}
    />
    <Image
      style={{ width: 28, height: 28, marginRight: 3 }}
      source={require("../assets/icons/big_trophy.png")}
    />
    <Image
      style={{ width: 28, height: 28, marginRight: 3 }}
      source={require("../assets/icons/gear.png")}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 72
  }
});

export default Footer;