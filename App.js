import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./screens/GoogleAuth/Login";
import CheckListScreen from "./screens/CheckListScreen/CheckListScreen";
import HomeScreen from "./screens/Home/Home";

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
      initialRouteName: "Home"
    }
  )
);

export default App;
