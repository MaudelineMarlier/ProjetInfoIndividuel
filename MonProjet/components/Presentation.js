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
          <Dialog.Title>Bienvenue dans notre système solaire </Dialog.Title>
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
  }
});
