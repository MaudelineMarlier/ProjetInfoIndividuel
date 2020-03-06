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
import Dialog, { DialogContent } from "react-native-popup-dialog";
import { Header } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";

export default class JouerJupiter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      press1: 0,
      press2: 0,
      press3: 0,
      reponse: 0,
      visible1: 0,
      visible2: 0
    };
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
  onPressBonneSolution = () => {
    this.setState({
      visible1: true
    });
  };
  onPressMauvaiseSolution = () => {
    this.setState({
      visible2: true
    });
  };
  render() {
    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity
            style={
              this.state.press1 % 2 == 0
                ? styles.button
                : styles.buttonSelectionne
            }
            onPress={this.onPress1}
          >
            <Text> Bouton 1 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.press2 % 2 == 0
                ? styles.button
                : styles.buttonSelectionne
            }
            onPress={this.onPress2}
          >
            <Text> Bouton 2 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.press3 % 2 == 0
                ? styles.button
                : styles.buttonSelectionne
            }
            onPress={this.onPress3}
          >
            <Text> Bouton 3 </Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Valider"
          color="lightgrey"
          onPress={
            this.state.reponse == 1
              ? this.onPressBonneSolution
              : this.onPressMauvaiseSolution
          }
        />
        <Dialog
          visible={this.state.visible1}
          onTouchOutside={() => {
            this.setState({ visible1: false });
          }}
        >
          <Text> Bien joué !</Text>
        </Dialog>
        <Dialog
          visible={this.state.visible2}
          onTouchOutside={() => {
            this.setState({ visible2: false });
          }}
        >
          <Text> Mauvaise réponse... </Text>
        </Dialog>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    marginTop: 300,
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10
  },
  buttonSelectionne: {
    alignItems: "center",
    backgroundColor: "lightgreen",
    padding: 10
  }
});
