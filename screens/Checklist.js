import React from 'react';
import {
  FlatList,
  View
} from 'react-native';

import Item from '../components/Item';

class Checklist extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      checkCount: 0
    }
  }

  itemCheckChanged = ({ checked }) => {
    const { onChange } = this.props;
    let { checkCount } = this.state;

    if(checked) {
      checkCount += 1;

    } else {
      checkCount -= 1;
    }

    this.setState({ checkCount });

    if(onChange) {
      onChange(checkCount);
    }
  }

  render () {
    const { list } = this.props;
    return (
      <View style={{ flex: 2 }}>
        <FlatList style={{ flex: 1 }}
          data={list}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item, index: i}) =>
              <Item
                onCheckChange={this.itemCheckChanged}
                title={`${item.todo} ${i}`}
                description={item.description}
                link={item.link} />
          } />
      </View>
    );
  }
}

export default Checklist;