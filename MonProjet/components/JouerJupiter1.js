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
      visibleBoutonSuivant: true,
      numeroPhrase: 0,
      phrases: [
        "Le petit Leo se trouve ____ dans le noir",
        "Julie ____ son chat sous son lit "
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
      visible1: true,
      visibleBoutonSuivant: false,
      numeroPhrase: 1,
      press1: 0
    });
  };
  onPressMauvaiseSolution = () => {
    this.setState({
      visible2: true
    });
  };
  onPressFermerLaPopUp = () => {
    this.setState({
      visible1: false,
      visible2: false
    });
  };

  render() {
    const { navigation } = this.props;
    var bonneReponse = 10;
    var mauvaiseReponse1 = 20;
    var mauvaiseReponse2 = 30;
    for (let i = 0; i < this.state.phrases.length; i++) {
      if (this.state.reponses[this.state.numeroPhrase][i][1] == 1) {
        if (i == 0) {
          bonneReponse = 0;
          mauvaiseReponse1 = 1;
          mauvaiseReponse2 = 2;
        }
        if (i == 1) {
          bonneReponse = 1;
          mauvaiseReponse1 = 0;
          mauvaiseReponse2 = 2;
        }
        if (i == 2) {
          bonneReponse = 2;
          mauvaiseReponse1 = 1;
          mauvaiseReponse2 = 0;
        }
      }
    }
    var retour = (
      <View style={{ alignItems: "center", flexDirection: "column" }}>
        <Text style={styles.instructions}>
          Remplis ces phrases pour aider Thomas à coloniser Jupiter ! {"\n"}
          {"\n"}
          Clique sur le mot que tu penses être le bon puis valide ta réponse
        </Text>
        <Progress.Bar progress={0.5} width={200} />
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
        <View style={styles.container}>
          <TouchableOpacity
            style={
              this.state.press1 % 2 == 0
                ? styles.button
                : styles.buttonSelectionne
            }
            onPress={this.onPress1}
          >
            <Text>
              {" "}
              {
                this.state.reponses[this.state.numeroPhrase][bonneReponse][0]
              }{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.press2 % 2 == 0
                ? styles.button
                : styles.buttonSelectionne
            }
            onPress={this.onPress2}
          >
            <Text>
              {" "}
              {
                this.state.reponses[this.state.numeroPhrase][
                  mauvaiseReponse1
                ][0]
              }{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.press3 % 2 == 0
                ? styles.button
                : styles.buttonSelectionne
            }
            onPress={this.onPress3}
          >
            <Text>
              {" "}
              {
                this.state.reponses[this.state.numeroPhrase][
                  mauvaiseReponse2
                ][0]
              }{" "}
            </Text>
          </TouchableOpacity>
        </View>
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
            <Dialog.Title>Bonne réponse ! </Dialog.Title>
            <Dialog.Description>
              Clique sur "Retour" pour pouvoir passer à la phrase suivante{" "}
            </Dialog.Description>
            <Dialog.Button label="Retour" onPress={this.onPressFermerLaPopUp} />
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
        {/* <Button
          title="Passer à l'exerce suivant"
          disabled={this.state.visibleBoutonSuivant}
          color="black"
          onPress={() => navigation.navigate("JouerJupiter2")}
        /> */}
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
    marginBottom: 50,
    marginHorizontal: 30
  },
  phraseTrou: {
    marginTop: 7,
    marginBottom: 10
  }
});
