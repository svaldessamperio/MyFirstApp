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
        flex: 1,
        backgroundColor:'#0e3063',
        flexDirection:'column',
        justifyContent: 'space-between',
    },
    boxBlue:{
        backgroundColor:'#4040c2',
        borderWidth:10,
        borderColor:'white',
        height: 100,
        width:100,
        alignSelf:'flex-end',
    },
    boxYOrange:{
        backgroundColor: '#f5733f',
        borderWidth:10,
        borderColor:'white',
        height: 100,
        width:100,
        alignSelf:'center',
    },
    boxBlueLight:{
        backgroundColor:'#86c9f0',
        borderWidth:10,
        borderColor:'white',
        height: 100,
        width:100,
        alignSelf: 'flex-start',
    }
});