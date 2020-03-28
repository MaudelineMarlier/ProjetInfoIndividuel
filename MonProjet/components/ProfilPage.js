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
      niveau: "CP",
      visible: false
    };
    //this.handleChangeText = this.handleChangeText.blind(this);
  }
  onPressVisible = () => {
    //this.setState({ visible: true });
  };

  render() {
    const { navigation } = this.props;
    var visible1 = false;
    var retour = (
      <View
        style={{
          flex: 1,
          marginLeft: 30,
          backgroundColor: "white",
          flexDirection: "column"
        }}
      >
        <Button title="Valider" color="#4DB844" onPress={(visible1 = true)} />
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
        <Text> Niveau d'étude : {this.state.niveau}</Text>

        <Dialog.Container visible={visible1}>
          <Dialog.Title>BRAVO ! </Dialog.Title>
          {/* <Dialog.Button label="X" onPress={this.onPressFermerLaPopUp} /> */}
          <Dialog.Description>Tu as fini l'exercice !</Dialog.Description>
          <Dialog.Button
            label="Go Jupiter"
            onPress={() => navigation.navigate("Jupiter")}
          />
          <Dialog.Button
            label="Home"
            onPress={() => navigation.navigate("Accueil")}
          />
          <Dialog.Button
            label="Planète suivante"
            onPress={() => navigation.navigate("Saturne")}
          />
        </Dialog.Container>
      </View>
    );
    return <View>{retour}</View>;
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
