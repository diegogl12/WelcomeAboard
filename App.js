import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/Login';
import TaskScreen from './screens/TaskScreen/TaskScreen';
import HomeScreen from './screens/Home/Home';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Task: { screen: TaskScreen }
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
