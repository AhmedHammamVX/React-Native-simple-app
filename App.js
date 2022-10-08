import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View ,Image, ScrollView, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './lab3Components/home';
import MyImagePicker from './lab3Components/imgPicker';
import WebB from './lab3Components/webBrowser';
import MyLocation from './lab3Components/location';
import Cam from './lab3Components/camera';
import Blocked from './lab3Components/Blocked';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="webBrowser" component={WebB} />
          <Stack.Screen name="imagePicker" component={MyImagePicker} />
          <Stack.Screen name="camera" component={Cam} />
          <Stack.Screen name="location" component={MyLocation} />
          <Stack.Screen name="Blocked" component={Blocked} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 20,
    flex:1,
  }
});
