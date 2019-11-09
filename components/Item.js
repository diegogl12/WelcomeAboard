import React from 'react';
import { Linking, Text } from 'react-native';
import {
  CheckBox,
  Icon,
  ListItem
} from 'react-native-elements';

class Item extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: false
    }
  }

  render () {
    const { title, description, link } = this.props;
    
    return (
      <ListItem
        title={title}
        subtitle={description}
        leftElement={<CheckBox checked={this.state.checked} onPress={() => this.setState({checked: !this.state.checked})} />}
        rightElement={link && <Icon name='launch' color='blue' onPress={() => Linking.openURL(link)} />}
        bottomDivider />
    );
  }

}

export default Item;