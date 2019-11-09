import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Text, ListItem } from "react-native-elements";

const GroupList = ({ items }) => (
  <View style={styles.viewContainer}>
    {items.map((item, index) => (
      <ListItem
        key={index}
        title={<Text h2>{item.name}</Text>}
        leftElement={
          <Text style={styles.text} h3>
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
