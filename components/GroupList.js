import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Text, ListItem } from "react-native-elements";

import groups from '../groups.json';

const GroupList = ({ navigation }) => (
  <View style={styles.viewContainer}>
    {groups.map((item, index) => (
      <ListItem
        onPress={() => navigation.navigate('Checklist')}
        key={index}
        title={<Text h4>{item.name}</Text>}
        leftElement={
          <Text style={styles.text} h5>
            {item.done}/{item.total}
          </Text>
        }
        chevron={{ size: 40 }}
        bottomDivider
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  text: {
    display: "flex",
    justifyContent: "center",
    minHeight: 50,
    width: 130,
    borderRightColor: "grey",
    paddingRight: 30,
    paddingVertical: 5,
    borderRightWidth: 2,
    marginRight: 40,
    marginLeft: 10
  },
  viewContainer: {
    display: "flex",
    width: "100%",
    padding: 10
  }
});

export default GroupList;
