import React from "react";
import { Platform, StyleSheet, View } from "react-native";

import GroupList from '../../components/GroupList.js'

const GroupListScreen = ({items}) => (
  <View>
    <GroupList items={items}/>
  </View>

);

export default GroupListScreen;
