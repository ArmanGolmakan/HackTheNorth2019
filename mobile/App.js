import React, { Component } from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./screens/HomeScreen";
import WriteNFC from "./screens/WriteNFC";
import ReadNFC from "./screens/ReadNFC";

const MainNavigator = createStackNavigator(
  {
    HomeScreen,
    WriteNFC,
    ReadNFC
  },
  { initialRouteName: "HomeScreen" },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return <AppContainer />;
  }
}
