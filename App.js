import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { 
  Button,
  CheckBox,
  colors,
  ListItem,
  ThemeProvider
} from 'react-native-elements';

import Item from './components/Item'
import Profile from './components/Profile'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

const theme = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios,
    }),
  },
};

const checklists = [
  {
    title: 'TODO',
    description: 'DESCRIPTION'
  },
  {
    title: 'TODO',
    description: 'DESCRIPTION'
  },
  {
    title: 'TODO',
    description: 'DESCRIPTION'
  },
  {
    title: 'TODO',
    description: 'DESCRIPTION'
  },
  {
    title: 'TODO',
    description: 'DESCRIPTION'
  }
]

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <Profile />
          <View style={{ flex: 2 }}>
            {checklists.map((check, i) => (
              <Item 
                key={i} 
                title={`${check.title} ${i}`}
                description={check.description} />
            ))}
          </View>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <Button title="Hey!" />
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
