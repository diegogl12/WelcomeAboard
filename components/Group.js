import React from 'react';
import {
  Card
} from 'react-native-elements';

class Group extends React.Component {
  render () {
    const { name, description } = this.props;
    return (
      <Card title={name}>
        <Text>{description}</Text>
      </Card>
    )
  }
}

export default Group;