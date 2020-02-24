import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Header,Image } from 'react-native-elements';
import { render } from 'react-dom';

export default function App() {
  _onPressButton() {
    alert("Good job!");
  };
  render(){
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
source={ require( './uranus1.jpg') }
style={{width: 110, height: 100, marginBottom : 20 }}>
<Text style={{color : 'white', textAlign : 'center'}}></Text>
</Image>
<Button 
onPress = {this._onPressButton}>
<Image
source={ require( './neptune1.jpg') }
style={{width: 130, height: 130, marginBottom : 20 }}
>
<Text style={{color : 'white', textAlign : 'center'}}>{'\n'}</Text>
</Image>
</Button>
<Image
source={ require( './mars1.jpg') }
style={{ width: 80, height: 80 }}>
<Text style={{color : 'white', textAlign : 'center'}}></Text>
</Image>
</View>

      <View style = {styles.soleil}>
      <Image
  source={ require( './saturne1.jpg') }
  style={{width: 110, height: 100, marginBottom : 20 }}>
    <Text style={{color : 'white', textAlign : 'center'}}></Text>
  </Image>
      <Image
  source={ require( './soleil.jpg') }
  style={{width: 130, height: 130,marginBottom : 20  }}>
    <Text style={{color : 'white', textAlign : 'center'}}>{'\n'}</Text>
  </Image>
  <Image
  source={ require( './terre1.jpg') }
  style={{ width: 80, height: 80, }}>
    <Text style={{color : 'white', textAlign : 'center'}}></Text>
  </Image>
    </View>

<View style = {styles.soleil}>
<Image
source={ require( './mercure1.jpg') }
style={{width: 110, height: 100, marginBottom : 20 }}>
<Text style={{color : 'white', textAlign : 'center'}}></Text>
</Image>
<Image
source={ require( './jupiter1.jpg') }
style={{width: 130, height: 130,marginBottom : 20  }}>
<Text style={{color : 'white', textAlign : 'center'}}>{'\n'}</Text>
</Image>
<Image
source={ require( './venus1.jpg') }
style={{ width: 80, height: 80, }}>
<Text style={{color : 'white', textAlign : 'center'}}></Text>
</Image>
</View>
</View>

  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  soleil :{
    alignItems : 'center',
    top: 10,
    left : 10,
    flexDirection : "row"
  },
});
