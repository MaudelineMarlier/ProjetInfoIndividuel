import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Button,
  TouchableOpacity
} from "react-native";
import { Header } from "react-native-elements";
// import { render } from "react-dom";
// import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import "react-native-gesture-handler";
import JupiterScreen from ".JupiterPage";
//import SaturnePage from "./components/SaturnePage";

function JupiterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text
        style={{
          color: "blue",
          marginTop: 20,
          fontSize: 20,
          fontStyle: "italic"
        }}
      >
        Pour coloniser Jupiter, tu dois aider X à retrouver les mots qu'il a
        perdu au cours d'une de ses batailles. {"\n"} Si tu te sens capable de
        l'aider, clique sur "Jouer !"
      </Text>
      <Button
        title="Jouer !"
        onPress={() => navigation.navigate("JouerJupiter")}
      />
    </View>
  );
}
