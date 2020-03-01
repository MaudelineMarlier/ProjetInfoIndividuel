import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Header, Image } from "react-native-elements";
import { render } from "react-dom";
import JupiterScreen from "./domain/JupiterScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  onPressUranus = () => {
    alert("Tu gagnes un calin !");
  };
  onPressNeptune = () => {
    alert("Tu gagnes un calin !");
  };
  onPressMars = () => {
    alert("Aussi beau qu'un dieu! <3");
  };
  onPressSoleil = () => {
    alert("Tu es le soleil de mes jours");
  };
  onPressTerre = () => {
    alert("Avec toi je n'ai plus les pieds sur terre");
  };
  onPressMercure = () => {
    alert("Ta froideur n'est qu'un coeur chaleureux bien caché");
  };
  onPressJupiter = () => {};
  onPressVenus = () => {
    alert("Aussi belle que le jour");
  };
  onPressSaturne = () => {
    alert("Oulala ça turne !");
  };

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
            <TouchableOpacity onPress={this.onPressUranus}>
              <Image
                source={require("./uranus1.jpg")}
                style={{ width: 110, height: 100, marginBottom: 20 }}
              >
                <Text style={{ color: "white", textAlign: "center" }}></Text>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressJupiter}>
              <Image
                source={require("./jupiter1.jpg")}
                style={{ width: 130, height: 130, marginBottom: 20 }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  {"\n"}
                </Text>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressMars}>
              <Image
                source={require("./mars1.jpg")}
                style={{ width: 80, height: 80 }}
              >
                <Text style={{ color: "white", textAlign: "center" }}></Text>
              </Image>
            </TouchableOpacity>
          </View>

          <View style={styles.soleil}>
            <TouchableOpacity onPress={this.onPressSaturne}>
              <Image
                source={require("./saturne1.jpg")}
                style={{ width: 110, height: 100, marginBottom: 20 }}
              >
                <Text style={{ color: "white", textAlign: "center" }}></Text>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressSoleil}>
              <Image
                source={require("./soleil.jpg")}
                style={{ width: 130, height: 130, marginBottom: 20 }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  {"\n"}
                </Text>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressTerre}>
              <Image
                source={require("./terre1.jpg")}
                style={{ width: 80, height: 80 }}
              >
                <Text style={{ color: "white", textAlign: "center" }}></Text>
              </Image>
            </TouchableOpacity>
          </View>

          <View style={styles.soleil}>
            <TouchableOpacity onPress={this.onPressMercure}>
              <Image
                source={require("./mercure1.jpg")}
                style={{ width: 110, height: 100, marginBottom: 20 }}
              >
                <Text style={{ color: "white", textAlign: "center" }}></Text>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressNeptune}>
              <Image
                source={require("./neptune1.jpg")}
                style={{ width: 130, height: 130, marginBottom: 20 }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  {"\n"}
                </Text>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressVenus}>
              <Image
                source={require("./venus1.jpg")}
                style={{ width: 80, height: 80 }}
              >
                <Text style={{ color: "white", textAlign: "center" }}></Text>
              </Image>
            </TouchableOpacity>
          </View>
        </View>
      </NavigationContainer>
    );
  }
}

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
