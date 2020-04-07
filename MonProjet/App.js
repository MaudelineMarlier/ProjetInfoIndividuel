import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./components/HomePage";
import JouerJupiter1 from "./components/JouerJupiter1";
import Presentation from "./components/Presentation";
import AccueilJupiter from "./components/AccueilJupiter";
import Soleil from "./components/ProfilPage";

// Une fonction est créée pour chaque page pour savoir ce qu'on affiche dedans
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
    <View style={{ flex: 1, backgroundColor: "white" }}>
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

// Un stack screen est créé pour chaque page pour savoir comment y aller
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          title: "Bienvenue !",
          headerStyle: {
            backgroundColor: "#9E1EA1",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  "Aide",
                  "Clique sur une des planètes pour commencer un jeu ou sur le Soleil pour voir ton profil."
                )
              }
            >
              <Text style={{ color: "white", marginRight: 20 }}>Aide</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Jupiter"
        component={JupiterScreen}
        initialParams={{ affichages: "noir" }}
        options={{
          title: "Bienvenue sur Jupiter",
          headerStyle: {
            backgroundColor: "#9E1EA1",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                Alert.alert("Aide", "Clique sur 'commencer à jouer'.")
              }
            >
              <Text style={{ color: "white", marginRight: 20 }}>Aide</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="JouerJupiter1"
        component={JouerJupiterScreen1}
        options={{
          title: "C'est parti !",
          headerStyle: {
            backgroundColor: "#9E1EA1",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  "Aide",
                  "Clique sur le mot que tu penses bien orthographié puis valides ta réponse. \nTu peux demander un indice ou abandonner."
                )
              }
            >
              <Text style={{ color: "white", marginRight: 20 }}>Aide</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Saturne"
        component={SaturneScreen}
        options={{
          title: "Saturne vous accueille",
          headerStyle: {
            backgroundColor: "#9E1EA1",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => Alert.alert("Pas d'aide disponible")}
            >
              <Text style={{ color: "white", marginRight: 20 }}>Aide</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Terre"
        component={TerreScreen}
        options={{
          title: "La Terre vous accueille",
          headerStyle: {
            backgroundColor: "#9E1EA1",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Mars"
        component={MarsScreen}
        options={{
          title: "Mars vous accueille",
          headerStyle: {
            backgroundColor: "#9E1EA1",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Soleil"
        component={SoleilScreen}
        options={{
          title: "Le Soleil vous accueille",
          headerStyle: {
            backgroundColor: "#9E1EA1",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Mercure"
        component={MercureScreen}
        options={{
          title: "Mercure vous accueille",
          headerStyle: {
            backgroundColor: "#9E1EA1",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Neptune"
        component={NeptuneScreen}
        options={{
          title: "Neptune vous accueille",
          headerStyle: {
            backgroundColor: "#9E1EA1",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Uranus"
        component={UranusScreen}
        options={{
          title: "Uranus vous accueille",
          headerStyle: {
            backgroundColor: "#9E1EA1",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Venus"
        component={VenusScreen}
        options={{
          title: "Venus vous accueille",
          headerStyle: {
            backgroundColor: "#9E1EA1",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
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
    alignItems: "center",
  },
});
