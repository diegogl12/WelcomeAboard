import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Avatar, Text } from "react-native-elements";

import { ICON_LIST } from './services.js';

const Profile = () => (
  <View style={styles.container}>
    <View style={styles.background} />
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
        <Text h4 style={{ color: "white", marginBottom: 3 }}>
          Hello,{" "}
        </Text>
        <View style={styles.subTitle}>
          {ICON_LIST.trophy}
          <Text style={{color: 'white', marginLeft: 6, fontSize: 16}} >2 accomplishments</Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 0
  },
  background: {
    position: "absolute",
    width: "100%",
    height: 110,
    backgroundColor: "#3388FF"
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 50
  },
  avatar: {
    display: "block",
    paddingLeft: 20
  },
  subTitle:{
    display: 'flex',
    flexDirection: 'row'
  },
  perfilInfo: {
    marginLeft: 9,
    position: "relative",
    width: "80%"
  }
});

export default Profile;