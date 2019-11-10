import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Avatar, Text } from "react-native-elements";

import TrophyPng from "../assets/icons/trophy.png";

const Header = ({ total, done, name }) => {
  const totalPercentage = done/total * 100 + "%";

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Text h4 style={{ color: "#3388FF", marginBottom: 3 }}>
          {name}
        </Text>
        <View style={styles.subTitle}>
          <Image
            style={{ width: 15, height: 15 }}
            source={require("../assets/icons/trophy.png")}
          />
          <Text style={{ marginLeft: 6, fontSize: 16 }}>
            {done} accomplishments
          </Text>
        </View>
      </View>
      <View style={styles.profile}>
        <View style={styles.perfilInfo}>
          <View style={styles.percentage}>
            <View
              style={{
                height: "100%",
                width: totalPercentage,
                backgroundColor: "#3388FF"
              }}
            ></View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 0,
    marginBottom: 9
  },
  background: {
    display: "flex",
    justifyContent: "flex-end",
    paddingLeft: 120,
    width: "100%",
    height: 130,
    backgroundColor: "#EDF4FC"
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  avatar: {
    position: "absolute",
    bottom: -10,
    left: 20
  },
  subTitle: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 12
  },
  perfilInfo: {
    paddingLeft: 120,
    paddingTop: 7,
    width: "80%"
  },
  percentage: {
    width: 275,
    height: 8,
    borderRadius: 10,
    borderColor: "#D8DDE1",
    borderWidth: 1
  }
});

export default Header;
