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
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";
import HomePage from "./components/HomePage";
import JupiterPage from "./components/JupiterPage";
import JouerJupiter from "./components/JouerJupiter";
// import { render } from "react-dom";
// import "react-native-gesture-handler";
// import "react-native-gesture-handler";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.lignePlanete}>
        <TouchableOpacity onPress={() => navigation.navigate("Jupiter")}>
          <ImageBackground
            source={require("./components/Images/jupiter1.jpg")}
            style={{ width: 110, height: 110, marginTop: 60 }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Saturne")}>
          <ImageBackground
            source={require("./components/Images/saturne1.jpg")}
            style={{ width: 120, height: 100, marginBottom: 30 }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Terre")}>
          <ImageBackground
            source={require("./components/Images/terre1.jpg")}
            style={{ width: 110, height: 110, marginTop: 60 }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.lignePlanete}>
        <TouchableOpacity onPress={() => navigation.navigate("Mars")}>
          <ImageBackground
            source={require("./components/Images/mars1.jpg")}
            style={{ width: 110, height: 110 }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Soleil")}>
          <ImageBackground
            source={require("./components/Images/soleil1.jpg")}
            style={{ width: 140, height: 140, marginLeft: 10 }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Mercure")}>
          <ImageBackground
            source={require("./components/Images/mercure1.jpg")}
            style={{ width: 110, height: 110 }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.lignePlanete}>
        <TouchableOpacity onPress={() => navigation.navigate("Neptune")}>
          <ImageBackground
            source={require("./components/Images/neptune1.jpg")}
            style={{ width: 110, height: 110, marginBottom: 30 }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Uranus")}>
          <ImageBackground
            source={require("./components/Images/uranus1.jpg")}
            style={{ width: 100, height: 113, marginTop: 40 }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Venus")}>
          <ImageBackground
            source={require("./components/Images/venus1.jpg")}
            style={{ width: 110, height: 110, marginBottom: 30 }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>{"\n"}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function JupiterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Bienvenu sur Jupiter</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Accueil")}>
        <Text>Retour à l'accueil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("JouerJupiter")}>
        <Text>Jouer !</Text>
      </TouchableOpacity>
    </View>
  );
}

function JouerJupiterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", flexDirection: "column" }}>
      <Text style={styles.instructions}>
        Remplis ces phrases pour aider Thomas à coloniser Jupiter !
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 15,
          borderWidth: 2,
          borderColor: "black"
        }}
      >
        <Text> {"     "}Le petit Leo se trouve </Text>
        <TextInput
          style={{
            borderColor: "black",
            backgroundColor: "lightgrey"
          }}
        ></TextInput>
        <Text style={{}}> dans le noir </Text>
      </View>
      <JouerJupiter />
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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="On ne peut pas encore jouer" />
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
          title: "Bienvenue dans notre système solaire !",
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
          title: "La Terre vous accueille",
          headerStyle: {
            backgroundColor: "#f4511e"
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
            backgroundColor: "#f4511e"
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
            backgroundColor: "#f4511e"
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
            backgroundColor: "#f4511e"
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
            backgroundColor: "#f4511e"
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
            backgroundColor: "#f4511e"
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
  }
});
