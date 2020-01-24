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
      userName: "",
      userPhotoUrl: "",
      isLoading: false
    };
  }

  componentDidMount() {
    this.getUserInfo();
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

  getUserInfo = () => {
    AsyncStorage.getItem("userName", (error, userName) => {
      if (!userName) {
        this.props.navigation.navigate("Auth");
      } else {
        this.setState({ userName });
      }
    });
    AsyncStorage.getItem("userPhotoUrl", (error, userPhotoUrl) => {
      if (!userPhotoUrl) {
        this.props.navigation.navigate("Auth");
      } else {
        this.setState({ userPhotoUrl });
      }
    });
  };

  render() {
    const { navigation } = this.props;
    const { isLoading, userName, userPhotoUrl } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <Profile info={groups} name={userName} photoUrl={userPhotoUrl} />
          {isLoading && <ActivityIndicator />}
          {!isLoading && (
            <FlatList
              data={groups}
              keyExtractor={(item, index) => `${index}`}
              renderItem={({ item: group }) => (
                <CardGroup
                  name={group["name"]}
                  total={items.filter(it => it.groupId == group.id).length}
                  done={0}
                  onPress={() =>
                    navigation.navigate("Checklist", {
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
