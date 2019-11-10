import React from 'react';
import { StyleSheet, Platform, View } from "react-native";
import { ThemeProvider, colors } from "react-native-elements";

import Profile from "../../components/Profile/Profile";

const theme = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios
    })
  }
};

const Home = () => (
    <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <Profile />
        </View>
    </ThemeProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  }
});

export default Home;