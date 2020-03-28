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
import * as Progress from "react-native-progress";
import App from "../App";

export default class JouerJupiter1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      press1: 0,
      press2: 0,
      press3: 0,
      reponse: 0,
      visible1: false,
      visible2: false,
      visible3: false,
      visibleBoutonSuivant: true,
      numeroPhrase: 0,
      valider: 0,
      progression: 0.33,
      navigate: this.props,
      help: Math.floor(Math.random() * 2),
      phrases: [
        "Le petit Leo se trouve ____ dans le noir",
        "Julie ____ son chat sous son lit ",
        "Pendant le confinement, il ____ travailler"
      ],
      reponses: [
        [
          ["perdu", 1],
          ["perdue", 0],
          ["perdus", 0]
        ],
        [
          ["cherchait", 1],
          ["chercher", 0],
          ["cherchaient", 0]
        ],
        [
          ["faut", 1],
          ["faux", 0],
          ["feau", 0]
        ]
      ]
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
      //visible1: true,
      // visibleBoutonSuivant: false,
      progression: this.state.progression + 0.34,
      press1: 0,
      valider: this.state.valider + 1
      //numeroPhrase: this.state.numeroPhrase + 1
      //reponse: 1
    });
    if (this.state.numeroPhrase < 2)
      this.setState({
        numeroPhrase: this.state.numeroPhrase + 1,
        help: Math.floor(Math.random() * 2)
      });
    if (this.state.valider == 2) {
      this.setState({ visible1: true });
    }
  };
  onPressMauvaiseSolution = () => {
    this.setState({
      visible2: true
    });
  };
  onPressFermerLaPopUp = () => {
    this.setState({
      visible1: false,
      visible2: false,
      visible3: false
    });
    if (this.state.valider == 3) {
      this.setState({
        visibleBoutonSuivant: false
      });
    }
  };

  onPressAbandon = () => {
    this.setState({
      visible3: true
    });
  };

  render() {
    const { navigation } = this.props;
    var boutons = [];
    if (this.state.help == 0) {
      boutons.push(
        <TouchableOpacity
          style={
            this.state.press1 % 2 == 0
              ? styles.button
              : styles.buttonSelectionne
          }
          onPress={this.onPress1}
        >
          <Text>{this.state.reponses[this.state.numeroPhrase][0][0]}</Text>
        </TouchableOpacity>,
        <TouchableOpacity
          style={
            this.state.press2 % 2 == 0
              ? styles.button
              : styles.buttonSelectionne
          }
          onPress={this.onPress2}
        >
          <Text>{this.state.reponses[this.state.numeroPhrase][1][0]}</Text>
        </TouchableOpacity>,
        <TouchableOpacity
          style={
            this.state.press3 % 2 == 0
              ? styles.button
              : styles.buttonSelectionne
          }
          onPress={this.onPress3}
        >
          <Text>{this.state.reponses[this.state.numeroPhrase][2][0]}</Text>
        </TouchableOpacity>
      );
    }

    if (this.state.help == 1) {
      boutons.push(
        <TouchableOpacity
          style={
            this.state.press2 % 2 == 0
              ? styles.button
              : styles.buttonSelectionne
          }
          onPress={this.onPress2}
        >
          <Text>{this.state.reponses[this.state.numeroPhrase][1][0]}</Text>
        </TouchableOpacity>,
        <TouchableOpacity
          style={
            this.state.press3 % 2 == 0
              ? styles.button
              : styles.buttonSelectionne
          }
          onPress={this.onPress3}
        >
          <Text>{this.state.reponses[this.state.numeroPhrase][2][0]}</Text>
        </TouchableOpacity>,
        <TouchableOpacity
          style={
            this.state.press1 % 2 == 0
              ? styles.button
              : styles.buttonSelectionne
          }
          onPress={this.onPress1}
        >
          <Text>{this.state.reponses[this.state.numeroPhrase][0][0]}</Text>
        </TouchableOpacity>
      );
    }

    if (this.state.help == 2) {
      boutons.push(
        <TouchableOpacity
          style={
            this.state.press3 % 2 == 0
              ? styles.button
              : styles.buttonSelectionne
          }
          onPress={this.onPress3}
        >
          <Text>{this.state.reponses[this.state.numeroPhrase][2][0]}</Text>
        </TouchableOpacity>,
        <TouchableOpacity
          style={
            this.state.press2 % 2 == 0
              ? styles.button
              : styles.buttonSelectionne
          }
          onPress={this.onPress2}
        >
          <Text>{this.state.reponses[this.state.numeroPhrase][1][0]}</Text>
        </TouchableOpacity>,
        <TouchableOpacity
          style={
            this.state.press1 % 2 == 0
              ? styles.button
              : styles.buttonSelectionne
          }
          onPress={this.onPress1}
        >
          <Text>{this.state.reponses[this.state.numeroPhrase][0][0]}</Text>
        </TouchableOpacity>
      );
    }

    var retour = (
      <View style={{ alignItems: "center", flexDirection: "column" }}>
        <Text style={styles.instructions}>
          Remplis ces phrases pour aider Thomas à coloniser Jupiter ! {"\n"}
          {"\n"}
          Clique sur le mot que tu penses être le bon puis valide ta réponse
          {"\n"}__________________________________________
          {/* {this.state.numeroPhrase} */}
        </Text>
        <Progress.Bar
          style={{ color: "green" }}
          progress={this.state.progression}
          width={200}
        />
        <Text>
          {"\n"}
          {"\n"}
          {"\n"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            borderWidth: 2,
            borderColor: "black"
          }}
        >
          <Text style={styles.phraseTrou}>
            {"       " +
              this.state.phrases[this.state.numeroPhrase] +
              "       "}
          </Text>
        </View>
        <View style={styles.container}>{boutons}</View>
        <Button
          title="Valider"
          color="#4DB844"
          onPress={
            this.state.reponse == 1
              ? this.onPressBonneSolution
              : this.onPressMauvaiseSolution
          }
        />
        <View>
          <Dialog.Container visible={this.state.visible1}>
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
        <View>
          <Dialog.Container visible={this.state.visible2}>
            <Dialog.Title>Mauvaise réponse... </Dialog.Title>
            <Dialog.Description>
              Clique sur "Recommencer" pour réessayer{" "}
            </Dialog.Description>
            <Dialog.Button
              label="Recommencer"
              onPress={this.onPressFermerLaPopUp}
            />
          </Dialog.Container>
        </View>
        <Text>
          {"\n"}
          {"\n"}
        </Text>
        <Button
          title="Abandonner"
          //disabled={this.state.visibleBoutonSuivant}
          color="black"
          onPress={this.onPressAbandon}
        />
        <Dialog.Container visible={this.state.visible3}>
          <Dialog.Title>Es-tu sûr de vouloir abandonner ?</Dialog.Title>
          <Dialog.Description>
            {/* Es-tu sur de vouloir abandonner ? */}
          </Dialog.Description>
          <Dialog.Button
            label="Oui           "
            onPress={() => navigation.navigate("Jupiter")}
          />
          <Dialog.Button
            label="Non                         "
            onPress={this.onPressFermerLaPopUp}
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
    marginBottom: 50,
    marginHorizontal: 12,
    alignItems: "center",
    backgroundColor: "#AEAEAE",
    borderWidth: 2,
    borderColor: "#AEAEAE",
    borderRadius: 8,
    padding: 7
  },
  buttonSelectionne: {
    marginTop: 30,
    marginBottom: 50,
    marginHorizontal: 12,
    alignItems: "center",
    backgroundColor: "#9E1EA1",
    borderWidth: 2,
    borderColor: "#9E1EA1",
    borderRadius: 8,
    padding: 7
  },
  instructions: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 30,
    marginHorizontal: 30
  },
  phraseTrou: {
    marginTop: 7,
    marginBottom: 10
  }
});
