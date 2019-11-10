import React from 'react';

import { StyleSheet, View, Image } from 'react-native';
import { Text } from "react-native-elements";

const CardGroup = ({ name, done, total, icon }) => (
  <View style={styles.cardContainer}>
    <View style={styles.card}>
      <View style={styles.background}>
        <Image
          style={styles.icon}
          source={require("../assets/icons/baby.png")}
        />
      </View>
      <View style={styles.contentView}>
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
    height: 153,
    borderRadius: 4
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 3 },
    // shadowOpacity: 0.2,
    // shadowRadius: 6
  },
  background: {
    width: "100%",
    height: 71,
    backgroundColor: "#EDF4FC"
  },
  icon: {
    top: 45,
    left: 25,
    width: 40,
    height: 40
  },
  contentView: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 25,
    paddingVertical: 16,
    borderColor: 'grey',
    borderWidth: 1,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent'
  },
  stepsView:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  }
});

export default CardGroup;