import React from "react";
import {
  FlatList,
  StyleSheet,
  Platform,
  View,
  ActivityIndicator
} from "react-native";
import { ThemeProvider, colors } from "react-native-elements";
import { AsyncStorage } from "react-native";
import { NavigationEvents } from "react-navigation";

import Profile from "../../components/Profile";
import CardGroup from "../../components/CardGroup";
import Footer from "../../components/Footer";

import { getUser } from "../GoogleAuth/service";
import { API_URL } from "../../config";

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
      name: "",
      userName: "",
      userPhotoUrl: "",
      user: {},
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getUserDataAndGroups();
  }

  getUserDataAndGroups() {
    getUser().then(userData => {
      const [nameKey, name] = userData[0];
      const [emailKey, email] = userData[1];
      const [photoKey, photoUrl] = userData[2];
      const user = {
        name,
        email,
        photoUrl
      };

      this.setState({ user });

      return fetch(`${API_URL}/users/${user.email}/categories.json`)
        .then(response => response.json())
        .then(categories => {
          this.setState({ groups: categories });
        })
        .catch(error => {
          console.warn(error);
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    });
  }

  render() {
    const { navigation } = this.props;
    const { isLoading, user, userName, userPhotoUrl, groups } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <NavigationEvents onDidFocus={() => this.getUserDataAndGroups()} />
          <Profile info={groups} name={user.name} photoUrl={user.photoUrl} />
          {isLoading && <ActivityIndicator />}
          {!isLoading && (
            <FlatList
              data={groups}
              keyExtractor={(item, index) => `${index}`}
              renderItem={({ item: group }) => (
                <CardGroup
                  name={group.name}
                  total={group.tasks_count}
                  done={group.tasks_done_count}
                  onPress={() =>
                    navigation.navigate("Checklist", {
                      user: user,
                      group: group
                    })
                  }
                />
              )}
            />
          )}
          <Footer />
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
  }
});

export default Home;
