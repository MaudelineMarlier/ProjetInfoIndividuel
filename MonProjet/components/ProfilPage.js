import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  PropTypes,
  Alert,
} from "react-native";
// import Dialog, { DialogContent } from "react-native-popup-dialog";
import Dialog from "react-native-dialog";

export default class Soleil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Dupont",
      nom1: "Dupont", //Les variables [...]1 sont utilisées pour stocker les valeurs des TextInput avant d'enregistrer les modifications
      prenom: "Julien",
      prenom1: "Julien",
      niveau: "CP",
      niveau1: "CP",
      visible1: false,
    };
  }

  render() {
    const { navigation } = this.props;
    var retour = (
      <View style={{ flexDirection: "column" }}>
        <Text
          style={{
            fontSize: 24,
            marginTop: 20,
            marginBottom: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Ton profil
        </Text>
        <View style={{ marginLeft: 20 }}>
          <View style={styles.titre}>
            <Text style={{ fontWeight: "bold" }}> Nom : </Text>
            <Text>{this.state.nom}</Text>
          </View>
          <View style={styles.titre}>
            <Text style={{ fontWeight: "bold" }}> Prénom : </Text>
            <Text>{this.state.prenom}</Text>
          </View>
          <View style={styles.titre}>
            <Text style={{ fontWeight: "bold" }}> Niveau d'étude : </Text>
            <Text>{this.state.niveau}</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end", marginRight: 20 }}>
          <Text>{"\n"}</Text>
          <TouchableOpacity
            style={styles.jouer}
            onPress={() => this.setState({ visible1: true })}
          >
            <Text>Modifier</Text>
          </TouchableOpacity>
        </View>
        <Dialog.Container visible={this.state.visible1}>
          <Dialog.Title> Modification </Dialog.Title>
          <Dialog.Input
            label="Nom"
            onChangeText={(nom1) => this.setState({ nom1 })}
            style={{ backgroundColor: "lightgrey" }}
          ></Dialog.Input>
          <Dialog.Input
            label="Prénom"
            onChangeText={(prenom1) => this.setState({ prenom1 })}
            style={{ backgroundColor: "lightgrey" }}
          ></Dialog.Input>
          <Dialog.Input
            label="Niveau de classe"
            onChangeText={(niveau1) => this.setState({ niveau1 })}
            style={{ backgroundColor: "lightgrey" }}
          ></Dialog.Input>
          <Dialog.Button
            label="Valider"
            onPress={() =>
              this.setState({
                nom: this.state.nom1,
                visible1: false,
                prenom: this.state.prenom1,
                niveau: this.state.niveau1,
              })
            }
          />
          <Dialog.Button
            label="Annuler"
            onPress={() => this.setState({ visible1: false })}
          />
        </Dialog.Container>
      </View>
    );
    return <View>{retour}</View>;
  }
}

const styles = StyleSheet.create({
  jouer: {
    backgroundColor: "#D142D4",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "#D142D4",
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
    width: 80,
  },
  titre: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    fontSize: 18,
  },
});
