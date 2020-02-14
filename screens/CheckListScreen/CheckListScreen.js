import React, { useState, useEffect } from "react";
import { Platform, StyleSheet, View } from "react-native";

import GroupInfo from "../../components/GroupInfo.js";
import Checklist from "../Checklist";
import Header from "../../components/Header.js";
import { API_URL } from "../../config";

const CheckListScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = navigation.getParam("user");
  const group = navigation.getParam("group");

  const fetchTasks = async () => {
    setLoading(true);
    const resp = await fetch(
      `${API_URL}/users/${user.email}/categories/${group.id}/tasks.json`
    );
    resp
      .json()
      .then(tasks => {
        setTasks(tasks);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <View>
      <Header
        total={tasks.length}
        done={tasks.filter(task => task.done).length}
        name={group.name}
        info={`${group.name} checklist`}
      />
      <View style={styles.container}>
        <Checklist user={user} list={tasks} onChange={fetchTasks} />
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
  containerItem: {
    display: "flex",
    flexDirection: "column"
  }
});

export default CheckListScreen;
