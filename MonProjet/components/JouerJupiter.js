import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Button,
  TouchableOpacity,
  PropTypes
} from "react-native";
import { Header } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";

export default class JouerJupiter extends Component {
  constructor(props) {
    super(props);
    this.state = { press: false, backgroundColor: "green" };
  }

  onPress = () => {
    this.setState({
      press: true,
      backgroundColor: "blue"
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={{ backgroundColor: this.state.backgroundColor }}
          onPress={this.onPress}
        >
          <Text> Touch Here </Text>
        </TouchableHighlight>
        {/* <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            {this.state.count !== 0 ? this.state.count : null}
          </Text>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
  }
});
