import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View ,Image } from 'react-native';

export default function Lab() {

  let [C,setC] = useState(0);
  let [text,setText] = useState("");
  let [Ctext,setCText] = useState("");
  let arr = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
            "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg",
            "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736875_960_720.jpg"]
  

  return (
    <View style={styles.container}>
      <TextInput style={styles.txtI} onChangeText={(e)=>{setText(e)}}/>
      <View style={styles.btn}>
        <Button title='Clear' onPress={()=>{setCText("")}}/>
      </View>
      <View style={styles.btn}>
        <Button title='Fill' onPress={()=>{setCText(text)}}/>
      </View>
      <TextInput style={styles.txtI} value={Ctext}/>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: arr[C],
        }}
      />
      <View style={styles.btn}>
        <Button title='next' onPress={()=>{
          if(C<2)
          {
            C++;
            setC(C);
          }

          }}/>
      </View>
      <View style={styles.btn}>
        <Button title='back' onPress={()=>{
          if(C>0)
          {
            C--;
            setC(C);
          }
            
          }}/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 20,

  },
  txtI: {
    backgroundColor: "#EEE",
    fontSize: 18,
    margin: 10
  },
  btn:{
    width:'40%',
    marginLeft:'30%',
    marginBottom:10
  },
  tinyLogo:
  {
    width:200,
    height:200,
    marginLeft:80,
    marginBottom:20
  }
});
