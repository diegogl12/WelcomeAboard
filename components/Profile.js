import React from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import { Avatar, Text } from "react-native-elements";

import TrophyPng from "../assets/icons/trophy.png";

const Profile = ({info, name}) => {
  let totalDone = 0;
  let total = 0;
  if(info.length > 0) {
    totalDone = info.reduce((acc, item) => ({done: acc.done + item.done}));
    total = info.reduce((acc, item) => ({ total: acc.total + item.total }));
  }
  let totalPercentage = totalDone.done/total.total*100+"%";

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Text h4 style={{ color: "white", marginBottom: 3 }}>
          Hello, {name}
        </Text>
        <View style={styles.subTitle}>
          <Image
            style={{ width: 15, height: 15 }}
            source={require("../assets/icons/trophy.png")}
          />
          <Text style={{ color: "white", marginLeft: 6, fontSize: 16 }}>
            {totalDone.done} accomplishments
          </Text>
        </View>
      </View>
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Avatar
            size={90}
            rounded
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
            }}
          />
        </View>
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
    marginBottom: 47
  },
  background: {
    display: "flex",
    justifyContent: "flex-end",
    paddingLeft: 120,
    width: "100%",
    height: 130,
    backgroundColor: "#3388FF"
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

export default Profile;