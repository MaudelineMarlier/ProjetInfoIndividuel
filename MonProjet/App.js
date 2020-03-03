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
          onSubmitEditing={text => onChangeText(text)}
        ></TextInput>
        <Text style={{}}> dans le noir </Text>
      </View>
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
          title: "Bienvue dans notre système solaire !",
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
    backgroundColor: "blue",
    alignItems: "center"
  },
  lignePlanete: {
    alignItems: "center",
    flexDirection: "row"
  }
});
