import React from 'react';
import { StyleSheet, Platform, View } from "react-native";
import { ThemeProvider, colors } from "react-native-elements";

import Profile from "../../components/Profile";
import CardGroup from "../../components/CardGroup"

const theme = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios
    })
  }
};

const listMock = [
  {
    name: "Sysops",
    total: 10,
    done: 9
  },
  {
    name: "Slack",
    total: 16,
    done: 3
  },
  {
    name: "Other",
    total: 5,
    done: 5
  },
  {
    name: "Squad",
    total: 6,
    done: 1
  }
];

const Home = () => (
  <ThemeProvider theme={theme}>
    <View style={styles.container}>
      <Profile info={listMock} name={"Joana"}/>
      {listMock.map(item => (
        <CardGroup
          name={item.name}
          total={item.total}
          done={item.done}
          // icon={iconList.baby}
        />
      ))}
    </View>
  </ThemeProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
});

export default Home;