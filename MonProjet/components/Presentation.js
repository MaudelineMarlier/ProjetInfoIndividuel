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
// import Dialog, { DialogContent } from "react-native-popup-dialog";
import Dialog from "react-native-dialog";
import { Header } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";

export default class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }
  onPressFermerLaPopUp = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <View>
        <Dialog.Container visible={this.state.visible}>
          <Dialog.Title>Bienvenu dans notre système solaire </Dialog.Title>
          <Dialog.Description>
            Tu es ici dans l'unique objectif d'aider Thomas à coloniser toutes
            les planètes du système solaire. {"\n"}Sauras-tu l'aider dans cette
            tâche difficile ? {"\n"}A toi de réussir tous les défis qui
            t'attendent... Pour commencer, rends-toi sur Jupiter !
          </Dialog.Description>
          <Dialog.Button label="Jouer" onPress={this.onPressFermerLaPopUp} />
        </Dialog.Container>
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
    marginTop: 30,
    marginBottom: 150,
    marginHorizontal: 20,
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10
  },
  buttonSelectionne: {
    marginTop: 30,
    marginBottom: 150,
    marginHorizontal: 20,
    alignItems: "center",
    backgroundColor: "lightgreen",
    padding: 10
  },
  instructions: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 50,
    marginHorizontal: 30
  },
  phraseTrou: {
    marginTop: 7,
    marginBottom: 10
  }
});
