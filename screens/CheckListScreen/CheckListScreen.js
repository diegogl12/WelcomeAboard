import React from "react";
import { Platform, StyleSheet, View } from "react-native";

import Item from '../../components/Item.js';
import GroupInfo from "../../components/GroupInfo.js";
import Checklist from '../Checklist';

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
    <Checklist />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
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
