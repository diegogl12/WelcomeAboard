import React from "react";
import { Platform, StyleSheet, View } from "react-native";

import { IMAGE_MAP } from "./services.js";

import Item from '../../components/Item.js';
import GroupInfo from "../../components/GroupInfo.js";

const list = [
  {
    title: "jira",
    description: "add a jira account",
    link: "google.com"
  },
  {
    title: "confluence",
    description: "add a confluence account",
    link: "google.com"
  }
];

const CheckListScreen = () => (
  <View style={styles.container}>
    {/* <View>{IMAGE_MAP["sysops"]}</View> */}
    <GroupInfo total={5} done={2} name={"SYSOPS"} info={"sysops é top!"} />
    <View style={styles.containerItem}>
      {list.map(item => (
        <Item
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "top",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: 20
  },
  containerItem:{
    display: 'flex',
    flexDirection: 'column'
  }
});

export default CheckListScreen;
