import React, { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";

import Item from '../../components/Item.js';
import GroupInfo from "../../components/GroupInfo.js";
import Task from '../Task/Task';
import items from '../../items.json';
import Header from "../../components/Header.js";

const TaskScreen = ({ navigation }) => {
  const [ checkCount, setCheckCount ] = useState(0);
  const groupName = navigation.getParam('groupName');

  return (
    <View>
      <Header
        total={items[groupName].length}
        done={checkCount}
        name={groupName}
        info={`${groupName} task`}
      />
      <View style={styles.container}>
        {/* <GroupInfo total={items[groupName].length} done={checkCount} name={groupName} info={`${groupName} Task`} /> */}
        <Task list={items[groupName]} onChange={setCheckCount} />
      </View>
    </View>
  );
};

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

export default TaskScreen;
