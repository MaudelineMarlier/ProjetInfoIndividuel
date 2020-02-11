import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header,Image } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Header
      containerStyle={{ backgroundColor: '#8343CA'}}
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'settings', color: '#fff', onPress: () => {alert('Go back!')} }}
/>
      <View style = {styles.soleil}>
      <Image
  source={ require( './saturne.jpg') }
  style={{ width: 100, height: 50, marginBottom : 20 }}>
    <Text style={{color : 'white', marginTop : 30, textAlign : 'center'}}>Saturne</Text>
  </Image>
      <Image
  source={ require( './soleil.jpg') }
  style={{ width: 130, height: 130,marginBottom : 20  }}>
    <Text style={{color : 'white', marginTop : 45, textAlign : 'center'}}>Le{'\n'}Soleil</Text>
  </Image>
  <Image
  source={ require( './terre.jpg') }
  style={{ width: 80, height: 80, }}>
    <Text style={{color : 'white', marginTop : 30, textAlign : 'center'}}>Terre</Text>
  </Image>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  soleil :{
    alignItems : 'center',
    top: 120,
  },
});
