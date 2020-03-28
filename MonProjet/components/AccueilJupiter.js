import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class AccueilJupiter extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.phraseTrou}>Phrases à trou</Text>
        <Image source={require("./Images/jupiter1.jpg")} style={styles.image} />
        <Text style={styles.instruction}>
          En atterissant sur cette planète, toutes vos affaires se sont
          renversées et malheureusement du café a coulé sur vos fiches de
          travail. {"\n"}
          {"\n"}
          Sauras-tu retrouver les mots manquants ?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("JouerJupiter1")}>
          <Text style={styles.jouer}>
            {"  "}Commencer à jouer !{"  "}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { alignItems: "center", backgroundColor: "white" },
  phraseTrou: { fontSize: 24, marginTop: 20, fontWeight: "bold" },
  instruction: {
    fontSize: 16,
    marginTop: 20,
    marginRight: 15,
    marginLeft: 25,
    alignContent: "center"
  },
  jouer: {
    backgroundColor: "#D142D4",
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "#D142D4",
    borderRadius: 8,
    padding: 6
  },
  image: { width: 200, height: 200, marginTop: 30 }
});
