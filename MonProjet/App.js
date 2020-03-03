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
// import { render } from "react-dom";
// import "react-native-gesture-handler";
// import "react-native-gesture-handler";
//import JupiterScreen from ".JupiterPage";
//import SaturnePage from "./components/SaturnePage";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Jupiter")}>
        <ImageBackground
          source={require("./jupiter1.jpg")}
          style={{ width: 110, height: 110, marginBottom: 20 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Saturne")}>
        <ImageBackground
          source={require("./saturne1.jpg")}
          style={{ marginTop: 5, width: 120, height: 100, marginBottom: 20 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Terre")}>
        <ImageBackground
          source={require("./terre1.jpg")}
          style={{ width: 110, height: 110, marginBottom: 20 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

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

function JouerJupiterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
        <Text style={{}}>Le petit Leo se trouve </Text>
        <TextInput
          style={{
            borderColor: "black",
            backgroundColor: "lightgrey"
          }}
        ></TextInput>
        <Text style={{}}> dans le noir </Text>
      </View>

      <Button title="Jouer !" onPress={() => navigation.navigate("Jouer")} />
    </View>
  );
}

function SaturneScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="On ne peut pas encore jouer" />
    </View>
  );
}
function TerreScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="On ne peut pas encore jouer" />
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
          title: "Jupiter",
          headerStyle: {
            backgroundColor: "#f4511e"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="Jupiter"
        component={JupiterScreen}
        options={{
          title: "Jupiter vous accueille !",
          headerStyle: {
            backgroundColor: "#f4511e"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="JouerJupiter"
        component={JouerJupiterScreen}
        options={{
          title: "C'est parti !",
          headerStyle: {
            backgroundColor: "#f4511e"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="Saturne"
        component={SaturneScreen}
        options={{
          title: "Saturne vous accueille",
          headerStyle: {
            backgroundColor: "#f4511e"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="Terre"
        component={TerreScreen}
        options={{
          title: "Le Terre vous accueille",
          headerStyle: {
            backgroundColor: "#f4511e"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center"
        }}
      />
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
    backgroundColor: "white",
    flexDirection: "row"
  },
  soleil: {
    alignItems: "center",
    top: 10,
    left: 10
  }
});
