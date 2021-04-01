import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';


const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return <View>
        <Text>{color}</Text>
        <Button onPress={()=> onIncrease() } title ={`Increase ${color}`}/>



        
        <Button onPress={()=> onDecrease () } title ={`Decrease${color}`}/>

{/* 
         <Text>Green</Text>
        <Button title ="Increase Red"/>
        <Button title ="Decrease Red"/>


        <Text>Blue</Text>
        <Button title ="Increase Red"/>
        <Button title ="Decrease Red"/>  */}
    </View>
}
export default ColorCounter