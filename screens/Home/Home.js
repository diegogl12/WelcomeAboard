import React from 'react';
import { FlatList, StyleSheet, Platform, View, ActivityIndicator } from "react-native";
import { ThemeProvider, colors } from "react-native-elements";

import Profile from "../../components/Profile";
import CardGroup from "../../components/CardGroup"

import items from '../../items.json';

const theme = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios
    })
  }
};

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      groups: [],
      name: '',
      isLoading: false
    }
  }

  componentDidMount () {
    this.setState({ isLoading: true })

    return fetch('http://a42b73e1d037911eaa7010217db8e776-15379359.us-east-1.elb.amazonaws.com:8080/users')
    .then((response) => response.json())
    .then((users) => {
      console.log(users)
      this.setState({ name: users[0]['Name'] })
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      fetch('http://a42b73e1d037911eaa7010217db8e776-15379359.us-east-1.elb.amazonaws.com:8080/groups')
      .then((response) => response.json())
      .then((groups) => {
        this.setState({ groups })
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        this.setState({ isLoading: false })
      })
    })
  }

  render () {
    const { navigation } = this.props;
    const { isLoading, groups, name } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <Profile info={groups} name={name} />
          {isLoading && (
            <ActivityIndicator />
          )}
          {!isLoading && (
            <FlatList data={groups}
              keyExtractor={(item, index) => `${index}`}
              renderItem={({item: group}) =>
              <CardGroup
                name={group["Name"]}
                total={items[group["Name"]].length}
                done={0}
                onPress={() => navigation.navigate('Checklist', { groupName: group['Name'] })}
              />
              } />
          )}
        </View>
      </ThemeProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
});

export default Home;