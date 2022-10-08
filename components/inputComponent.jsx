import { View ,Text,StyleSheet, TextInput,TouchableOpacity} from "react-native"
import {MaterialIcons} from "@expo/vector-icons"
import { useState } from "react"

export default function AddC(props)
{
    let[task,setTask] = useState("");

    let add = ()=>{
        props.getTask(task);
    }

    return(
        <View style={styles.com}>
            <View style={styles.inpAadd}>
                <TextInput style={styles.txtI} onChangeText={(e)=>{setTask(e)}}/>
                <TouchableOpacity onPress={add}>
                    <View style={styles.btn}>
                        <MaterialIcons name="add" size={40} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      paddingTop: 20,
  
    },
    com:{
        padding:10,
        paddingTop:20,
    },
    txtI:{
        backgroundColor:"#EEE",
        width:"88%",
        fontSize:30
    },
    inpAadd:{
        flexDirection:"row",

    },
    btn:{
        backgroundColor:'black'
    }
  });