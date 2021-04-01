
import React from 'react';
import {Text,StyleSheet, View, Button} from 'react-native';

const HomeScreen =(props)=>{
    return(
        <View>
            <Text style={styles.textStyle}>This is Home Screen</Text>
            <Button
            color="green"
      title="Component Page"
      onPress={() => {
        props.navigation.navigate('Components');
      }}
    />
       <Button
       color="orange"
      title="List Page"
      onPress={() => {
        props.navigation.navigate('List');
      }}
    />
      <Button
      color="gray"
      title="Image Page"
      onPress={() => {
        props.navigation.navigate('Image');
      }}
    />
     <Button
     color="red"
      title="Counter Page"
      onPress={() => {
        props.navigation.navigate('Counter');
      }}
    />
     <Button
     
      title="Color Page"
      onPress={() => {
        props.navigation.navigate('Color');
      }}
    />
        <Button
     color="tomato"
     title="Squar Page"
     onPress={() => {
       props.navigation.navigate('Squar');
     }}
   />
         <Button
     color="darkred"
     title="Text Page"
     onPress={() => {
       props.navigation.navigate('Text');
     }}
   />
       <Button
     color="gold"
     title="Text Page"
     onPress={() => {
       props.navigation.navigate('Box');
     }}
   />
        </View>
    )
};
const styles= StyleSheet.create({
    textStyle:{
        fontSize:30
    }
});
export default HomeScreen;