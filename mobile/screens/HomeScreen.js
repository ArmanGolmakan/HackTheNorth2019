import React from "react";
import { View, Text, Button, Alert } from "react-native";
import * as firebase from "firebase";

class HomeScreen extends React.Component {
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
      const value = JSON.stringify(snapshot.val());
      this.props.navigation.navigate("WriteNFC", value);
    });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Home Screen</Text>
        <Button
          onPress={() => {
            navigate("ReadNFC");
          }}
          title="Scan NFC"
        />
      </View>
    );
  }
}

export default HomeScreen;
