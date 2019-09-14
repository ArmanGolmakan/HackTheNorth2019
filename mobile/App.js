import React, { Component } from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Alert } from "react-native";
import * as firebase from "firebase";

import HomeScreen from "./screens/HomeScreen";
import WriteNFC from "./screens/WriteNFC";
import ReadNFC from "./screens/ReadNFC";

const MainNavigator = createStackNavigator(
  {
    HomeScreen,
    WriteNFC,
    ReadNFC
  },
  { initialRouteName: "HomeScreen" }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCQAALH6GDc6in0lH6x_Prmuvk1BkR_3qw",
      authDomain: "hackthenorth2019-6706e.firebaseapp.com",
      databaseURL: "https://hackthenorth2019-6706e.firebaseio.com",
      projectId: "hackthenorth2019-6706e",
      storageBucket: "",
      messagingSenderId: "783964043403",
      appId: "1:783964043403:web:9f87c784d00cf3277b3c8e"
    };
    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const userRef = firebaseApp.database().ref("user/");
    userRef.on("value", snapshot => {
      Alert.alert(JSON.stringify(snapshot.val()));
    });
  }
  render() {
    return <AppContainer />;
  }
}
