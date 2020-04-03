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

export default class HomePage extends Component {
  render() {
    const { navigation } = this.props;
    // Affichage des planètes autour du Soleil
    return (
      <View style={{ alignItems: "center", backgroundColor: "white" }}>
        <Text>{"\n"}</Text>
        <View style={styles.lignePlanete}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Jupiter", { affichages: "noir" })
            }
          >
            <ImageBackground
              source={require("./Images/jupiter1.jpg")}
              style={{ width: 110, height: 110, marginTop: 60 }}
            ></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Saturne")}>
            <ImageBackground
              source={require("./Images/saturne1.jpg")}
              style={{ width: 120, height: 100, marginBottom: 30 }}
            ></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Terre")}>
            <ImageBackground
              source={require("./Images/terre1.jpg")}
              style={{ width: 110, height: 110, marginTop: 60 }}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.lignePlanete}>
          <TouchableOpacity onPress={() => navigation.navigate("Mars")}>
            <ImageBackground
              source={require("./Images/mars1.jpg")}
              style={{ width: 110, height: 110 }}
            ></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Soleil")}>
            <ImageBackground
              source={require("./Images/soleil1.jpg")}
              style={{ width: 140, height: 140, marginLeft: 10 }}
            ></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Terre")}>
            <ImageBackground
              source={require("./Images/mercure1.jpg")}
              style={{ width: 110, height: 110 }}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.lignePlanete}>
          <TouchableOpacity onPress={() => navigation.navigate("Neptune")}>
            <ImageBackground
              source={require("./Images/neptune1.jpg")}
              style={{ width: 110, height: 110, marginBottom: 30 }}
            ></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Uranus")}>
            <ImageBackground
              source={require("./Images/uranus1.jpg")}
              style={{ width: 100, height: 113, marginTop: 40 }}
            ></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Venus")}>
            <ImageBackground
              source={require("./Images/venus1.jpg")}
              style={{ width: 110, height: 110, marginBottom: 30 }}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lignePlanete: {
    alignItems: "center",
    flexDirection: "row"
  }
});
