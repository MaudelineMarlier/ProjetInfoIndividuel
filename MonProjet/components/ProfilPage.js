import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Button,
  Image,
  TouchableOpacity,
  PropTypes,
  Alert,
  TextInput
} from "react-native";
// import Dialog, { DialogContent } from "react-native-popup-dialog";
import Dialog from "react-native-dialog";
import { Header } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableHighlight } from "react-native-gesture-handler";

export default class Soleil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Dupont",
      prenom: "Julien",
      niveau: "CP"
    };
    //this.handleChangeText = this.handleChangeText.blind(this);
  }
  handleNom = text => {
    this.setState({ nom: text });
  };
  handlePrenom = text => {
    this.setState({ prenom: text });
  };
  login = (nom, prenom) => {
    alert("à changer");
  };

  render() {
    const { navigation } = this.props;
    return (
      <View
        style={{
          flex: 1,
          marginLeft: 30,
          backgroundColor: "white",
          flexDirection: "column"
        }}
      >
        <Text
          style={{
            fontSize: 24,
            marginTop: 20,
            marginBottom: 20,
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          Ton profil
        </Text>
        <Text> Nom : {this.state.nom} </Text>
        <Text> Prénom : {this.state.prenom} </Text>
        <Text> Niveau d'étude : {this.state.niveau} </Text>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.nom, this.state.prenom)}
        >
          <Text> Modifier </Text>
        </TouchableOpacity>
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
    marginBottom: 70,
    marginHorizontal: 20,
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10
  },
  buttonSelectionne: {
    marginTop: 30,
    marginBottom: 70,
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
