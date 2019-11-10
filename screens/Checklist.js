import React from 'react';
import {
  FlatList,
  View
} from 'react-native';

import Item from '../components/Item';

import items from '../items.json';

const checklists = items;


class Checklist extends React.Component {
  render () {
    return (
      <View style={{ flex: 2 }}>
        <FlatList style={{ flex: 1 }}
          data={checklists}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item, index: i}) => {
            return (
              <Item
                title={`${item.todo} ${i}`}
                description={item.description}
                link={item.link} />
            )
          }} />
      </View>
    );
  }
}

export default Checklist;