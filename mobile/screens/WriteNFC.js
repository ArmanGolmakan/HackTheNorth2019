import React, { Component } from "react";
import { View, Text, Platform, Image, Alert, StyleSheet } from "react-native";
import NfcManager, { Ndef } from "react-native-nfc-manager";

function buildTextPayload(valueToWrite) {
  return Ndef.encodeMessage([Ndef.textRecord(valueToWrite)]);
}

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

class WriteNFC extends Component {
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
      parsedText: this.props.navigation.getParam("value", ""),
      tag: {}
    };
  }

  componentDidMount() {
    NfcManager.isSupported().then(supported => {
      this.setState({ supported });
      if (supported) {
        this._startNfc();
        this._startDetection();
        this._requestNdefWrite();
      }
    });
  }

  componentWillUnmount() {
    if (this._stateChangedSubscription) {
      this._stateChangedSubscription.remove();
    }
    this._stopDetection();
    this._cancelNdefWrite();
  }

  render() {
    let { supported, enabled, tag, parsedText } = this.state;
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

  _requestFormat = () => {
    let { isWriting } = this.state;
    if (isWriting) {
      return;
    }

    this.setState({ isWriting: true });
    NfcManager.requestNdefWrite(null, { format: true })
      .then(() => console.log("format completed"))
      .catch(err => console.warn(err))
      .then(() => this.setState({ isWriting: false }));
  };

  _requestNdefWrite = () => {
    let { isWriting, parsedText } = this.state;
    if (isWriting) {
      return;
    }
    let bytes = buildTextPayload(parsedText);

    this.setState({ isWriting: true });
    NfcManager.requestNdefWrite(bytes)
      .then(() => {
        Alert.alert(
          "Success",
          "Patient information successfully updated on NFC"
        );
        this.props.navigation.navigate("HomeScreen");
      })
      .catch(err => console.warn(err))
      .then(() => this.setState({ isWriting: false }));
  };

  _cancelNdefWrite = () => {
    this.setState({ isWriting: false });
    NfcManager.cancelNdefWrite()
      .then(() => console.log("write cancelled"))
      .catch(err => console.warn(err));
  };

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

export default WriteNFC;
