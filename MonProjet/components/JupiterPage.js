import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Header, Image } from "react-native-elements";
// import { render } from "react-dom";
// import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import "react-native-gesture-handler";

export class JupiterPage extends Component {
  render() {
    return (
      <NavigationContainer>
        <View style={styles.container}>
          <Header
            containerStyle={{ backgroundColor: "#8343CA" }}
            leftComponent={{ icon: "menu", color: "#fff" }}
            centerComponent={{
              text: "Titre de l'appli...",
              style: { color: "#fff" }
            }}
            rightComponent={{
              icon: "settings",
              color: "#fff",
              onPress: () => {
                alert("Go back!");
              }
            }}
          />
        </View>
        <View>Bienvenu sur Jupiter</View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home Page")}
        >
          <Text>Retour à l'accueil</Text>
        </TouchableOpacity>
      </NavigationContainer>
    );
  }
}
