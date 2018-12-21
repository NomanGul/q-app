import React from "react";
import { View } from "react-native";
import Loading from "./components/Loading";
import Login from "./components/Login";
import Home from "./components/Home";
import Company from "./components/Company";
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

const AppStack = createStackNavigator({ Home, Company });
const AuthStack = createStackNavigator({ Login });

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

/* Colors
Primary: #8e24aa
P-Light: #c158dc
P-Dark: #5c007a
*/
