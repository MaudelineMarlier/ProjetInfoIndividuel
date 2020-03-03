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
//import JupiterPage from "./components/JupiterPage";
//import SaturnePage from "./components/SaturnePage";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Jupiter")}>
        <ImageBackground
          source={require("./jupiter1.jpg")}
          style={{ width: 130, height: 130, marginBottom: 20 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

function JupiterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Jouer !"
        onPress={() => navigation.navigate("JouerJupiter")}
      />
    </View>
  );
}

function JouerJupiterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Jouer !" onPress={() => navigation.navigate("Jouer")} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: "#f4511e"
          }
        }}
      />
      <Stack.Screen name="Jupiter" component={JupiterScreen} />
      <Stack.Screen name="JouerJupiter" component={JouerJupiterScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
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
