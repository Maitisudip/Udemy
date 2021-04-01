import React from 'react';
import {Text,StyleSheet, View} from 'react-native';
const ComponentsScreen =()=>{
    const name="Sudip kumar Maiti";
    return(
        <View>
            <Text style={styles.textStyle}>This is Component Screen</Text>
            <Text style={styles.nameStyle}>My name is {name}</Text>
        </View>
    )
};
const styles= StyleSheet.create({
    textStyle:{
        fontSize:30
    },
    nameStyle:{
        fontSize:20,
        color:'red'
    }
});
export default ComponentsScreen;