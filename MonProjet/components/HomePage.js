import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Header, Image } from "react-native-elements";
// import { render } from "react-dom";
// import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import "react-native-gesture-handler";
import JupiterPage from "./JupiterPage";
import SaturnePage from "./SaturnePage";

export class HomePage extends Component {
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

          <View style={styles.soleil}>
            <TouchableOpacity style={styles.container}>
              <Text>Saturne</Text>
            </TouchableOpacity>
            <Button
              title="Aller à Jupiter"
              color="blue"
              onPress={() => this.props.navigation.navigate("Jupiter")}
            />
          </View>
        </View>
      </NavigationContainer>
    );
  }
}

export default class App extends Component {
  render() {
    return <AppStackNavigator />;
  }
}

const AppStackNavigator = createStackNavigator({
  Home: HomePage,
  Jupiter: JupiterPage,
  Saturne: SaturnePage
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  soleil: {
    alignItems: "center",
    top: 10,
    left: 10,
    flexDirection: "row"
  }
});
