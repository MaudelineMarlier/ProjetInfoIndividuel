// import React, { Component } from "react";
// import {
//   StyleSheet,
//   Text,
//   ImageBackground,
//   View,
//   Button,
//   TouchableOpacity
// } from "react-native";
// import { Header } from "react-native-elements";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { TextInput } from "react-native-gesture-handler";

// export default class HomePage extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Presentation />
//         <View style={styles.lignePlanete}>
//           <TouchableOpacity onPress={() => navigation.navigate("Jupiter")}>
//             <ImageBackground
//               source={require("./components/Images/jupiter1.jpg")}
//               style={{ width: 110, height: 110, marginTop: 60 }}
//             >
//               <Text style={{ color: "white", textAlign: "center" }}>
//                 {"\n"}
//               </Text>
//             </ImageBackground>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate("Saturne")}>
//             <ImageBackground
//               source={require("./components/Images/saturne1.jpg")}
//               style={{ width: 120, height: 100, marginBottom: 30 }}
//             >
//               <Text style={{ color: "white", textAlign: "center" }}>
//                 {"\n"}
//               </Text>
//             </ImageBackground>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate("Terre")}>
//             <ImageBackground
//               source={require("./components/Images/terre1.jpg")}
//               style={{ width: 110, height: 110, marginTop: 60 }}
//             >
//               <Text style={{ color: "white", textAlign: "center" }}>
//                 {"\n"}
//               </Text>
//             </ImageBackground>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.lignePlanete}>
//           <TouchableOpacity onPress={() => navigation.navigate("Mars")}>
//             <ImageBackground
//               source={require("./components/Images/mars1.jpg")}
//               style={{ width: 110, height: 110 }}
//             >
//               <Text style={{ color: "white", textAlign: "center" }}>
//                 {"\n"}
//               </Text>
//             </ImageBackground>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate("Soleil")}>
//             <ImageBackground
//               source={require("./components/Images/soleil1.jpg")}
//               style={{ width: 140, height: 140, marginLeft: 10 }}
//             >
//               <Text style={{ color: "white", textAlign: "center" }}>
//                 {"\n"}
//               </Text>
//             </ImageBackground>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate("Mercure")}>
//             <ImageBackground
//               source={require("./components/Images/mercure1.jpg")}
//               style={{ width: 110, height: 110 }}
//             >
//               <Text style={{ color: "white", textAlign: "center" }}>
//                 {"\n"}
//               </Text>
//             </ImageBackground>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.lignePlanete}>
//           <TouchableOpacity onPress={() => navigation.navigate("Neptune")}>
//             <ImageBackground
//               source={require("./components/Images/neptune1.jpg")}
//               style={{ width: 110, height: 110, marginBottom: 30 }}
//             >
//               <Text style={{ color: "white", textAlign: "center" }}>
//                 {"\n"}
//               </Text>
//             </ImageBackground>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate("Uranus")}>
//             <ImageBackground
//               source={require("./components/Images/uranus1.jpg")}
//               style={{ width: 100, height: 113, marginTop: 40 }}
//             >
//               <Text style={{ color: "white", textAlign: "center" }}>
//                 {"\n"}
//               </Text>
//             </ImageBackground>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate("Venus")}>
//             <ImageBackground
//               source={require("./components/Images/venus1.jpg")}
//               style={{ width: 110, height: 110, marginBottom: 30 }}
//             >
//               <Text style={{ color: "white", textAlign: "center" }}>
//                 {"\n"}
//               </Text>
//             </ImageBackground>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "blue",
//     alignItems: "center"
//   },
//   lignePlanete: {
//     alignItems: "center",
//     flexDirection: "row"
//   }
// });
