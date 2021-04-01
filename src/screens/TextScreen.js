import React,{ useReducer,useState}from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native'; 



const TextScreen =() => {
    const [name,setName]= useState('');
    const [password,setPassword]= useState('');
    return(
        <View>
            <TextInput style={styles.input}
            autoCapitalize="words"
            autoCorrect={false}
            value={name}
            onChangeText={newValue => setName(newValue)}
           
            />
            <Text>My name Is:{name}</Text>
            {true ? <Text>That was true</Text> :null}
            <Text>password</Text>
            <TextInput style={styles.input}
            value={password}
            onChangeText={newValue => setPassword(newValue)}
           
            />
            {password.length <4 ? <Text> thik kore de</Text> : null}
        </View>
    );
};
const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth:1
    }
});
export default TextScreen