import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/Home/Home';
import Checklist from './screens/Checklist';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Checklist: { screen: Checklist }
});

const App = createAppContainer(MainNavigator);

export default App;
