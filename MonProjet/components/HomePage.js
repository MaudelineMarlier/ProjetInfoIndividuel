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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TextInput } from "react-native-gesture-handler";

export default class MealPage extends React.Component {
render () {
  return (
    <View style={styles.lignePlanete}>
      <TouchableOpacity onPress={() => navigation.navigate("Jupiter")}>
        <ImageBackground
          source={require("./jupiter1.jpg")}
          style={{ width: 110, height: 110, marginTop: 60 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Saturne")}>
        <ImageBackground
          source={require("./saturne1.jpg")}
          style={{ width: 120, height: 100, marginBottom: 30 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Terre")}>
        <ImageBackground
          source={require("./terre1.jpg")}
          style={{ width: 110, height: 110, marginTop: 60 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
    <View style={styles.lignePlanete}>
      <TouchableOpacity onPress={() => navigation.navigate("Mars")}>
        <ImageBackground
          source={require("./mars1.jpg")}
          style={{ width: 110, height: 110 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Soleil")}>
        <ImageBackground
          source={require("./soleil1.jpg")}
          style={{ width: 140, height: 140, marginLeft: 10 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Mercure")}>
        <ImageBackground
          source={require("./mercure1.jpg")}
          style={{ width: 110, height: 110 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
    <View style={styles.lignePlanete}>
      <TouchableOpacity onPress={() => navigation.navigate("Neptune")}>
        <ImageBackground
          source={require("./neptune1.jpg")}
          style={{ width: 110, height: 110, marginBottom: 30 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Uranus")}>
        <ImageBackground
          source={require("./uranus1.jpg")}
          style={{ width: 100, height: 113, marginTop: 40 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Venus")}>
        <ImageBackground
          source={require("./venus1.jpg")}
          style={{ width: 110, height: 110, marginBottom: 30 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  )}}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "blue",
      alignItems: "center"
    },
    lignePlanete: {
      alignItems: "center",
      flexDirection: "row"
    }
  });