import React from 'react';
import {
  CheckBox,
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
    return (
      <ListItem
        title={this.props.title}
        subtitle={this.props.description}
        leftElement={<CheckBox checked={this.state.checked} onPress={() => this.setState({checked: !this.state.checked})} />}
        bottomDivider />
    );
  }

}

export default Item;