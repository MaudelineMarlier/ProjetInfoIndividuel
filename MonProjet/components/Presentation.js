import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  PropTypes,
  Alert,
} from "react-native";
import Dialog from "react-native-dialog";
import { Header } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";

// Pop-up à l'ouverture du jeu pour présenter l'application
export default class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }
  onPressFermerLaPopUp = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <View>
        <Dialog.Container visible={this.state.visible}>
          <Dialog.Title>De retour dans notre système solaire </Dialog.Title>
          <Dialog.Description>
            {"\n    "}
            Tu as déjà bien avancé dans ta conquête des planètes ! {"\n    "}
            Essaies maintenant de récupérer Jupiter.
          </Dialog.Description>
          <Dialog.Button label="Jouer" onPress={this.onPressFermerLaPopUp} />
        </Dialog.Container>
      </View>
    );
  }
}
