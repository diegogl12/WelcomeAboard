import React from "react";
import { Linking, View, StyleSheet, Image } from "react-native";
import { CheckBox, Icon, ListItem, Text } from "react-native-elements";

import { API_URL } from "../config";

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.done
    };
  }

  checkChanged = () => {
    const { id, onCheckChange } = this.props;
    const { checked } = this.state;
    const new_checked = !checked;

    fetch(`${API_URL}/task_users/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ task_user: { done: new_checked } })
    })
      .then(data => data.json())
      .then(data => {
        this.setState({ checked: new_checked });

        if (onCheckChange) {
          onCheckChange({ id, checked: new_checked });
        }
      });
  };

  render() {
    const { title, description, link } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.checkbox}>
            <CheckBox
              checked={this.state.checked}
              onPress={this.checkChanged}
              containerStyle={{ marginRight: 0 }}
              checkedIcon={
                <Image
                  style={{ width: 24, height: 24, marginRight: 3 }}
                  source={require("../assets/icons/checked.png")}
                />
              }
              uncheckedIcon={
                <Image
                  style={{ width: 24, height: 24, marginRight: 3 }}
                  source={require("../assets/icons/unchecked.png")}
                />
              }
            />
            <Text style={{ color: "#9DA7B1" }}>{title}</Text>
          </View>
          <Text style={{ color: "#3388FF" }}>Preview</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 15,
    marginBottom: 18
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 60,
    paddingRight: 18,
    borderRadius: 4,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: "white"
  },
  checkbox: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row"
  }
});

export default Item;
