import React from "react";
import {
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQAALH6GDc6in0lH6x_Prmuvk1BkR_3qw",
  authDomain: "hackthenorth2019-6706e.firebaseapp.com",
  databaseURL: "https://hackthenorth2019-6706e.firebaseio.com",
  projectId: "hackthenorth2019-6706e",
  storageBucket: "",
  messagingSenderId: "783964043403",
  appId: "1:783964043403:web:9f87c784d00cf3277b3c8e"
};
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
}
const userRef = firebaseApp.database().ref("user/");
let isInitial = true;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#069BAB",
    fontWeight: "bold",
    fontSize: 30,
    height: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  scanNFC: {
    width: 200
  },
  logo: {
    width: 100,
    position: "absolute",
    left: 0,
    top: 0
  }
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  componentDidMount() {
    // hacky way to prevent initial loading from firebase
    userRef.on("value", snapshot => {
      if (isInitial) {
        isInitial = false;
      } else {
        const value = JSON.stringify(snapshot.val());
        this.props.navigation.navigate("WriteNFC", { value });
      }
    });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.background}>
        <TouchableOpacity
          onPress={() => {
            navigate("ReadNFC", { firebaseApp });
          }}
        >
          <Image
            style={styles.scanNFC}
            resizeMode={"contain"}
            source={require("../assets/ScanNFC.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;
