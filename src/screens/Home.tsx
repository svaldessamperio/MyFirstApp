import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style={styles.container}>
      
      <View style={styles.purpleBox}>
        <Text style={{fontSize:20, color: 'red'}}>HOLAAAAAAA</Text>  
      </View>
      {/* <View style={styles.orangeBox}/> */}
      {/* <View style={styles.purpleBox1}/> */}
      {/* <View style={styles.orangeBox1}/>
      <View style={styles.purpleBox2}/>
      <View style={styles.orangeBox2}/> */}

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      height: 600,
      width: 300,
      backgroundColor:'#7d8b79',
    },

    purpleBox: {
        height:200,
        width: 300,
        margin: 10,
        textAlign:'center',
        borderColor: 'red',
        paddingLeft:5,
        borderWidth: 5,
        backgroundColor: 'purple',
        position:'absolute',
        top: 0,

    },
    orangeBox: {
        height:40,
        width: 40,
        backgroundColor: 'orange',
        position: 'absolute',

    },
    purpleBox1: {

        margin: 10,
        backgroundColor: 'green',
        ...StyleSheet.absoluteFillObject,

    },
    orangeBox1: {
        height:100,
        width: 100,
        margin: 10,
        backgroundColor: 'orange',
        top: -220,
        left: 10
    },
    purpleBox2: {
      height:100,
      width: 100,
      margin: 10,
      backgroundColor: 'purple',
      top: -220

  },
  orangeBox2: {
      height:100,
      width: 100,
      margin: 10,
      backgroundColor: 'orange',
      top: -330,
      left: 10
  }        
})