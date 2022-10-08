import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View ,Image, ScrollView, Keyboard } from 'react-native';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Welcome</Text>

      <View style={styles.btn}>
        <Button title='Camera' onPress={()=>{navigation.navigate('camera')}}/>
      </View>

      <View style={styles.btn}>
        <Button title='location'  onPress={()=>{navigation.navigate('location')}}/>
      </View>

      <View style={styles.btn}>
        <Button title='Web Browser'  onPress={()=>{navigation.navigate('webBrowser')}}/>
      </View>

      <View style={styles.btn}>
        <Button title='image Picker'  onPress={()=>{navigation.navigate('imagePicker')}}/>
      </View>

      <View style={styles.btn}>
        <Button title='capturing disabled'  onPress={()=>{navigation.navigate('Blocked')}}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 20,
    flex:1,
    flexDirection:'column',
    alignItems:'center',
  },
  txt:{
    textAlign:'center',
    fontSize:25,
    marginBottom:30,
    marginTop:20
  },
  btn:{
    width:'50%',
    margin:20,
  }
});
