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
  Alert
} from "react-native";
// import Dialog, { DialogContent } from "react-native-popup-dialog";
import Dialog from "react-native-dialog";
import { Header } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";

export default class AccueilJupiter extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ alignItems: "center", backgroundColor: "white" }}>
        <Text style={{ fontSize: 20, marginTop: 20 }}>
          Bienvenue sur Jupiter
        </Text>
        <Image
          source={require("./Images/jupiter1.jpg")}
          style={{ width: 200, height: 200, marginTop: 30 }}
        />
        <Text
          style={{
            fontSize: 16,
            marginTop: 20,
            marginRight: 15,
            marginLeft: 25,
            alignContent: "center"
          }}
        >
          En atterissant sur cette planète, toutes vos affaires ce sont
          renversées et malheureusement du café a coulé sur vos fiches de
          travail. {"\n"}
          {"\n"}
          Sauras-tu retrouver les mots manquants ?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("JouerJupiter1")}>
          <Text
            style={{
              backgroundColor: "#D142D4",
              marginTop: 30,
              fontSize: 20,
              fontWeight: "bold",
              borderWidth: 2,
              borderColor: "#D142D4",
              borderRadius: 8,
              padding: 6
            }}
          >
            {"  "}Commencer à jouer !{"  "}
          </Text>
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
