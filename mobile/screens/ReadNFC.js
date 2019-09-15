import React, { Component } from "react";
import {
  View,
  Text,
  Platform,
  ScrollView,
  Image,
  Alert,
  StyleSheet
} from "react-native";
import NfcManager, { Ndef } from "react-native-nfc-manager";

const styles = StyleSheet.create({
  background: {
    fontWeight: "bold",
    fontSize: 30,
    height: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  scanNFC: {
    width: 400
  }
});

class ReadNFC extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      supported: true,
      enabled: false,
      isWriting: false,
      rtdType: 1,
      parsedText: null,
      tag: {}
    };
  }

  componentDidMount() {
    NfcManager.isSupported().then(supported => {
      this.setState({ supported });
      if (supported) {
        this._startNfc();
        this._startDetection();
      }
    });
  }

  componentWillUnmount() {
    if (this._stateChangedSubscription) {
      this._stateChangedSubscription.remove();
    }
    this._stopDetection();
  }

  uploadToFirebase(input) {
    const firebase = this.props.navigation.getParam("firebaseApp", "");
    firebase
      .database()
      .ref("user/")
      .set({
        input
      });
  }
  render() {
    return (
      <View style={styles.background}>
        <Image
          style={styles.scanNFC}
          source={require("../assets/scan.gif")}
          resizeMode={"center"}
        />
      </View>
    );
  }

  _startNfc() {
    NfcManager.start({
      onSessionClosedIOS: () => {
        console.log("ios session closed");
      }
    })
      .then(result => {
        console.log("start OK", result);
      })
      .catch(error => {
        console.warn("start fail", error);
        this.setState({ supported: false });
      });

    if (Platform.OS === "android") {
      NfcManager.getLaunchTagEvent()
        .then(tag => {
          console.log("launch tag", tag);
          if (tag) {
            this.setState({ tag });
          }
        })
        .catch(err => {
          console.log(err);
        });
      NfcManager.isEnabled()
        .then(enabled => {
          this.setState({ enabled });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  _onTagDiscovered = tag => {
    console.log("Tag Discovered", tag);
    this.setState({ tag });
    let text = this._parseText(tag);
    this.setState({ parsedText: text });
    // hacky way to remove metadata
    this.uploadToFirebase(text.slice(3, text.length));
    Alert.alert("Success", "Patient information successfully scanned.");
    this.props.navigation.navigate("HomeScreen");
    // upload to firebase
  };

  _startDetection = () => {
    NfcManager.registerTagEvent(this._onTagDiscovered)
      .then(result => {
        console.log("registerTagEvent OK", result);
      })
      .catch(error => {
        console.warn("registerTagEvent fail", error);
      });
  };

  _stopDetection = () => {
    NfcManager.unregisterTagEvent()
      .then(result => {
        console.log("unregisterTagEvent OK", result);
      })
      .catch(error => {
        console.warn("unregisterTagEvent fail", error);
      });
  };

  _parseText = tag => {
    try {
      if (Ndef.isType(tag.ndefMessage[0], Ndef.TNF_WELL_KNOWN, Ndef.RTD_TEXT)) {
        return Ndef.text.decodePayload(tag.ndefMessage[0].payload);
      }
    } catch (e) {
      console.log(e);
    }
    return null;
  };
}

export default ReadNFC;
