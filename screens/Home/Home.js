import React from 'react';
import { FlatList, StyleSheet, Platform, View } from "react-native";
import { ThemeProvider, colors } from "react-native-elements";

import Profile from "../../components/Profile";
import CardGroup from "../../components/CardGroup";
import Footer from "../../components/Footer";

import groups from '../../groups.json';
import items from '../../items.json';

console.log(items)
console.log(groups)

groups.forEach(group => {
  console.log(group.name, items[group.name].length)
});

const theme = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios
    })
  }
};

const Home = ({ navigation }) => (
  <ThemeProvider theme={theme}>
    <View style={styles.container}>
      <Profile info={groups} name={"Joana"} />
      <FlatList data={groups}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item: group}) =>
        <CardGroup
          name={group.name}
          total={items[group.name].length}
          done={0}
          onPress={() => navigation.navigate('Checklist', { groupName: group.name })}
        />
        }
      />
      <Footer />
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