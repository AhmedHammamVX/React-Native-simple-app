import { View ,Text,StyleSheet, TextInput,TouchableOpacity} from "react-native"
import {MaterialIcons} from "@expo/vector-icons"
import { useState } from "react"

export default function Note(props)
{
    let D = ()=>{
        props.Delete(props.id)
    }

    return(
        <View style={styles.com}>
            <View style={styles.note}>
                <Text style={styles.noteN}>{props.id}|</Text>
                <Text style={styles.noteT}>{props.note}</Text>
                <TouchableOpacity onPress={D}>
                    <View style={styles.btn}>
                        <MaterialIcons name="backspace" size={25} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    com:{
        padding:10,
        paddingTop:20,
    },
    note:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:2,
        marginBottom:20
    }
    ,btn:{
        paddingTop:10,
    },
    noteN:{
        fontSize:20,
        marginRight:5
    },
    noteT:{
        fontSize:25,
        width:'85%'
    },
    
  });