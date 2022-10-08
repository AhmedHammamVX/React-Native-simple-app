import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View ,Image, ScrollView, Keyboard } from 'react-native';
import AddC from './components/inputComponent';
import Note from './components/taskComponent';

export default function App() {

  let [tasks,setTasks] = useState([]);

  let getTask = (newTask)=>{
    setTasks([...tasks,newTask]);
    Keyboard.dismiss();
  }

  let Delete = (id)=>{
    /* let arr = tasks.filter((task,i)=>{task.length > 5}); */
    /* setTasks([...tasks,id]) */
    /* for(let i = 0; i<tasks.length;i++)
    {
      if(i == 2)
      {
        let g = [...tasks];
        g[2]=null;
        setTasks(g);
      }
    } */
    let arr = [...tasks];
    arr.splice(2,1); 
    setTasks(arr);
  }

  let showNote = ()=>{
    return tasks.map((note,idx)=>{
      return(
        <Note note={note} id={idx+1} Delete={Delete} key={idx}/>
      )
    })
  }

  let Clear = ()=>{ 
    setTasks([]);
  }


  return (
    <View style={styles.container}>
      <AddC getTask={getTask}/>
      <ScrollView style={{paddingVertical: 20}}>
        {showNote()}
      </ScrollView>
      <View >
        <Button title='clear' onPress={Clear}/>
      </View>
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
