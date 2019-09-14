import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Platform,
  TouchableOpacity,
  Linking,
  TextInput,
  ScrollView
} from "react-native";
import NfcManager, { Ndef } from "react-native-nfc-manager";

function buildTextPayload(valueToWrite) {
  return Ndef.encodeMessage([Ndef.textRecord(valueToWrite)]);
}

class WriteNFC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supported: true,
      enabled: false,
      isWriting: false,
      urlToWrite: "https://www.google.com",
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
      }
    });
  }

  componentWillUnmount() {
    if (this._stateChangedSubscription) {
      this._stateChangedSubscription.remove();
    }
  }

  render() {
    let {
      supported,
      enabled,
      tag,
      isWriting,
      urlToWrite,
      parsedText
    } = this.state;
    return (
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>{`Is NFC supported ? ${supported}`}</Text>
          <Text>{`Is NFC enabled (Android only)? ${enabled}`}</Text>

          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={this._startDetection}
          >
            <Text style={{ color: "blue" }}>Start Tag Detection</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={this._stopDetection}
          >
            <Text style={{ color: "red" }}>Stop Tag Detection</Text>
          </TouchableOpacity>
          {
            <View
              style={{ padding: 10, marginTop: 20, backgroundColor: "#e0e0e0" }}
            >
              <Text>(android) Write NDEF Test</Text>

              <TouchableOpacity
                style={{
                  marginTop: 20,
                  borderWidth: 1,
                  borderColor: "blue",
                  padding: 10
                }}
                onPress={
                  isWriting ? this._cancelNdefWrite : this._requestNdefWrite
                }
              >
                <Text style={{ color: "blue" }}>{`(android) ${
                  isWriting ? "Cancel" : "Write NDEF"
                }`}</Text>
              </TouchableOpacity>
            </View>
          }

          <Text style={{ marginTop: 20 }}>{`Current tag JSON: ${JSON.stringify(
            tag
          )}`}</Text>
          {parsedText && (
            <Text
              style={{ marginTop: 10, marginBottom: 20, fontSize: 18 }}
            >{`Parsed Text: ${parsedText}`}</Text>
          )}
        </View>
      </ScrollView>
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
    let { isWriting, urlToWrite } = this.state;
    if (isWriting) {
      return;
    }
    let bytes = buildTextPayload(urlToWrite);

    this.setState({ isWriting: true });
    NfcManager.requestNdefWrite(bytes)
      .then(() => console.log("write completed"))
      .catch(err => console.warn(err))
      .then(() => this.setState({ isWriting: false }));
  };

  _cancelNdefWrite = () => {
    this.setState({ isWriting: false });
    NfcManager.cancelNdefWrite()
      .then(() => console.log("write cancelled"))
      .catch(err => console.warn(err));
  };

  _requestAndroidBeam = () => {
    let { isWriting, urlToWrite, rtdType } = this.state;
    if (isWriting) {
      return;
    }

    let bytes = buildTextPayload(urlToWrite);

    this.setState({ isWriting: true });
    NfcManager.setNdefPushMessage(bytes)
      .then(() => console.log("beam request completed"))
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
