import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Button,
  TouchableOpacity,
  PropTypes,
  Alert
} from "react-native";
import { Header } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";

export default class JouerJupiter extends Component {
  constructor(props) {
    super(props);
    this.state = { press1: 0, press2: 0, press3: 0, reponse: 0 };
  }

  onPress1 = () => {
    this.setState({
      press1: this.state.press1 + 1,
      press2: 0,
      press3: 0,
      reponse: 1
    });
  };
  onPress2 = () => {
    this.setState({
      press2: this.state.press2 + 1,
      press1: 0,
      press3: 0,
      reponse: 2
    });
  };
  onPress3 = () => {
    this.setState({
      press3: this.state.press3 + 1,
      press1: 0,
      press2: 0,
      reponse: 3
    });
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <TouchableHighlight
            style={
              this.state.press1 % 2 == 0
                ? styles.button
                : styles.buttonSelectionne
            }
            onPress={this.onPress1}
          >
            <Text> Bouton 1 </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={
              this.state.press2 % 2 == 0
                ? styles.button
                : styles.buttonSelectionne
            }
            onPress={this.onPress2}
          >
            <Text> Bouton 2 </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={
              this.state.press3 % 2 == 0
                ? styles.button
                : styles.buttonSelectionne
            }
            onPress={this.onPress3}
          >
            <Text> Bouton 3 </Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          style={styles.buttonSelectionne}
          onPress={
            this.state.reponse == 1 ? Alert.alert("Bonne réponse") : null
          }
        >
          <Text> Valider </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10
  },
  buttonSelectionne: {
    alignItems: "center",
    backgroundColor: "lightgreen",
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
