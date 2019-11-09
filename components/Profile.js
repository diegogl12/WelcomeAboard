import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Avatar } from 'react-native-elements';

class Profile extends React.Component {

  render () {
    return (
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Avatar style={{ width: 50, height: 50 }}
            rounded
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
        </View>
        <View style={{ width: '80%' }}>
          <Text>FirstName LastName</Text>
          <Text>@firstname.lastname</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%'
  },
  avatar: {
    width: 80,
    paddingLeft: 20,
  }
});

export default Profile;