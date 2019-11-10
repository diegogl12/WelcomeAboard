import React from 'react';

import { StyleSheet, View, Image } from 'react-native';
import { Text } from "react-native-elements";

const CardGroup = ({ name, done, total, icon }) => (
  <View style={styles.cardContainer}>
    <View style={styles.card}>
      <View style={styles.background} />
      <View style={styles.contentView}>
        <Image
          style={{ width: 40, height: 40, marginRight: 3, marginBottom: 3}}
          source={require("../assets/icons/baby.png")}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#3388FF" }}>
          {name}
        </Text>
        <View style={styles.stepsView}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 17, fontWeight: "bold", marginRight: 3 }}>
              {done}/{total}
            </Text>
            <Text style={{ fontSize: 17 }}>steps</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 15, height: 15, marginRight: 3 }}
              source={require("../assets/icons/trophy.png")}
            />
            <Text>{done}</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: 153,
    paddingHorizontal: 16,
    color: "white",
    marginBottom: 29
  },
  card: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6
  },
  background: {
    position: "absolute",
    width: "100%",
    height: 71,
    backgroundColor: "#EDF4FC"
  },
  contentView: {
    marginTop: 42,
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 30,
    paddingBottom: 16
  },
  stepsView:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  }
});

export default CardGroup;