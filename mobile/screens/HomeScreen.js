import React from "react";
import { View, Text, Button } from "react-native";

class HomeScreen extends React.Component {
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
