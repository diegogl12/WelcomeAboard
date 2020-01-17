import React from "react";
import {
  FlatList,
  StyleSheet,
  Platform,
  View,
  ActivityIndicator
} from "react-native";
import { ThemeProvider, colors } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";

import Profile from "../../components/Profile";
import CardGroup from "../../components/CardGroup";
import Footer from "../../components/Footer";

import groups from "../../groups.json";
import items from "../../items.json";
import users from "../../users.json";

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
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    return fetch("https://onboarding.dev.sam-app.ro/users")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ name: users[2].name });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        fetch("https://onboarding.dev.sam-app.ro/groups")
          .then(response => response.json())
          .then(data => {
            this.setState({ groups });
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
            this.setState({ isLoading: false });
          });
      });
  }

  render() {
    const { navigation } = this.props;
    const { isLoading, groups, name } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <Profile
            info={groups}
            name={AsyncStorage.getItem("userName")}
            photoUrl={AsyncStorage.getItem("userPhotoUrl")}
          />
          {isLoading && <ActivityIndicator />}
          {!isLoading && (
            <FlatList
              data={groups}
              keyExtractor={(item, index) => `${index}`}
              renderItem={({ item: group }) => (
                <CardGroup
                  name={group["Name"]}
                  total={items[group["Name"]].length}
                  done={0}
                  onPress={() =>
                    navigation.navigate("Checklist", {
                      groupName: group["Name"]
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
