import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import CheckListScreen from './screens/CheckListScreen/CheckListScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Checklist: { screen: CheckListScreen }
});

const App = createAppContainer(
  createSwitchNavigator(
    {
      Auth: LoginScreen,
      Home: MainNavigator
    },
    {
      initialRouteName: 'Auth'
    }
  )
);

export default App;
