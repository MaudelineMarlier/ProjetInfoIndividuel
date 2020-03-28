import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Button,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import { Header } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";
import HomePage from "./components/HomePage";
import JupiterPage from "./components/JupiterPage";
import JouerJupiter1 from "./components/JouerJupiter1";
import JouerJupiter2 from "./components/JouerJupiter2";
import Presentation from "./components/Presentation";
import AcceilJupiter from "./components/AccueilJupiter";
import Dialog from "react-native-dialog";
import AccueilJupiter from "./components/AccueilJupiter";
import Soleil from "./components/ProfilPage";
import { ScreenStackHeaderLeftView } from "react-native-screens";

// import { render } from "react-dom";
// import "react-native-gesture-handler";
// import "react-native-gesture-handler";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Presentation />
      <HomePage navigation={navigation} />
    </View>
  );
}

function JupiterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <AccueilJupiter navigation={navigation} />
    </View>
  );
}

function JouerJupiterScreen1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", flexDirection: "column" }}>
      <JouerJupiter1 navigation={navigation} />
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
function MarsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="On ne peut pas encore jouer" />
    </View>
  );
}
function SoleilScreen({ navigation }) {
  return (
    <View>
      <Soleil navigation={navigation} />
    </View>
  );
}
function MercureScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="On ne peut pas encore jouer" />
    </View>
  );
}
function NeptuneScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="On ne peut pas encore jouer" />
    </View>
  );
}
function UranusScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="On ne peut pas encore jouer" />
    </View>
  );
}
function VenusScreen({ navigation }) {
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
          title: "Bienvenue !",
          headerStyle: {
            backgroundColor: "#9E1EA1"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                alert("Clique sur une des planètes pour commencer un jeu")
              }
            >
              <Text style={{ color: "white", marginRight: 20 }}>Aide</Text>
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name="Jupiter"
        component={JupiterScreen}
        options={{
          title: "Bienvenue sur Jupiter",
          headerStyle: {
            backgroundColor: "#9E1EA1"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => alert("Clique sur commencer à jouer")}
            >
              <Text style={{ color: "white", marginRight: 20 }}>Aide</Text>
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name="JouerJupiter1"
        component={JouerJupiterScreen1}
        options={{
          title: "C'est parti !",
          headerStyle: {
            backgroundColor: "#9E1EA1"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                alert(
                  "Clique sur le mot que tu penses bien orthographié puis valides ta réponse"
                )
              }
            >
              <Text style={{ color: "white", marginRight: 20 }}>Aide</Text>
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name="Saturne"
        component={SaturneScreen}
        options={{
          title: "Saturne vous accueille",
          headerStyle: {
            backgroundColor: "#9E1EA1"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="Terre"
        component={TerreScreen}
        options={{
          title: "La Terre vous accueille",
          headerStyle: {
            backgroundColor: "#9E1EA1"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="Mars"
        component={MarsScreen}
        options={{
          title: "Mars vous accueille",
          headerStyle: {
            backgroundColor: "#9E1EA1"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="Soleil"
        component={SoleilScreen}
        options={{
          title: "Le Soleil vous accueille",
          headerStyle: {
            backgroundColor: "#9E1EA1"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="Mercure"
        component={MercureScreen}
        options={{
          title: "Mercure vous accueille",
          headerStyle: {
            backgroundColor: "#9E1EA1"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="Neptune"
        component={NeptuneScreen}
        options={{
          title: "Neptune vous accueille",
          headerStyle: {
            backgroundColor: "#9E1EA1"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="Uranus"
        component={UranusScreen}
        options={{
          title: "Uranus vous accueille",
          headerStyle: {
            backgroundColor: "#9E1EA1"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="Venus"
        component={VenusScreen}
        options={{
          title: "Venus vous accueille",
          headerStyle: {
            backgroundColor: "#9E1EA1"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center"
        }}
      />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  },
  lignePlanete: {
    alignItems: "center",
    flexDirection: "row"
  },
  instructions: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginHorizontal: 30
  },
  phraseTrou: {
    marginTop: 7,
    marginBottom: 10
  }
});
