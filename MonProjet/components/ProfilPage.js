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
    //var visible1 = false;
    var retour = (
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
        <Text> Niveau d'étude : {this.state.niveau}</Text>
        {/* <TouchableOpacity>
          <Text
            style={styles.jouer}
            onPress={() => navigation.navigate("JouerJupiter1")}
          >
            {"  "}Commencer à jouer !{"  "}
          </Text>
        </TouchableOpacity> */}
        {/*         
        <Dialog.Container visible={visible1}>
          <Dialog.Title>BRAVO ! </Dialog.Title>
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
        </Dialog.Container> */}
      </View>
    );
    return <View>{retour}</View>;
  }
}

const styles = StyleSheet.create({
  jouer: {
    backgroundColor: "#D142D4",
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "#D142D4",
    borderRadius: 8,
    padding: 6
  }
});
