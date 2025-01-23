import { StyleSheet } from "react-native";

export const  globalStyles = StyleSheet.create({
    centerContainer:{
        flex:1,
        flexDirection:'column',
        alignItems:'center'
    },
    title:{
        fontSize:80,
        fontWeight:300,
        color:'black',
    },
    fab:{  
        position:'absolute',
        margin:16,
        right:0,
        bottom:0,
    }
});