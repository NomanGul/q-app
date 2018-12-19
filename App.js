import React from "react";
import { View } from "react-native";
import Loading from "./components/Loading";
import Login from "./components/Login";
import Home from "./components/Home";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

// export default class App extends React.Component {
//   render() {
//     return (
//         <Login />
//     );
//   }
// }

const AppStack = createStackNavigator({ Home: Home });
const AuthStack = createStackNavigator({ Login: Login });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: Loading,
      App: AppStack,
      Auth: AuthStack
      // Auth: AuthStack,
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

// const AppNavigator = createStackNavigator(
//   {
//     Login: Login,
//     Home: Home
//   },
//   {
//     initialRouteName: "Login"
//   }
// );

// export default createAppContainer(AppNavigator);
