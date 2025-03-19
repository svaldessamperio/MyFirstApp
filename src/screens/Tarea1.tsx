import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Tarea1() {
  return (
    <View style={styles.container}>
        <View style={styles.boxBlue}/>
        <View style={styles.boxYOrange}/>
        <View style={styles.boxBlueLight}/>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection:'column'
    },
    boxBlue:{
        flex: 1,
        backgroundColor:'#4040c2',
        borderWidth:10,
        borderColor:'white',
        width:100,
    },
    boxYOrange:{
        flex: 8,
        backgroundColor: '#f5733f',
        borderWidth:10,
        borderColor:'white',
        width:100,
    },
    boxBlueLight:{
        flex: 1,
        backgroundColor:'#86c9f0',
        borderWidth:10,
        borderColor:'white',
        width:100,   
    }
});