import React, { useState } from 'react';
import { useReducer } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { color } from 'react-native-reanimated';
import ColorCounter from '../componets/ColorCounter'
const COLOR_INCREMENT = 15;
const reducer = (state,action) => {
    switch (action.type){
    case 'change_red':
       return state.red + action.playload > 255 || state.red +action.playload < 0 
           ? state
        :  {...state, red: state.red + action.playload};
    case 'change_green' :
        return state.green + action.playload > 255 || state.green +action.playload < 0 
        ? state
     :  {...state, green: state.green + action.playload};
    case 'change_blue':
        return state.blue + action.playload > 255 || state.blue +action.playload < 0 
        ? state
     :  {...state, blue: state.blue + action.playload};
    default:
        return state;
}
};
const SquareScreen = (props) => {
    
//     const [red,setRed] = useState(0);
//     const [green,setGreen] = useState(0);
//     const [blue,setBlue] = useState(0);
// const setColor = (color,change) =>{
//     switch (color) {
//         case 'red' :
//             red + change >255 || red + change <0 ? null : setRed(red + change);
//         return ;
//         case 'green' :
//             green + change >255 || green + change <0 ? null : setGreen(green + change);
//         return ;
//         case 'blue' :
//             blue + change >255 || blue + change <0 ? null : setBlue(blue + change);
//         return ;
//         default:
//             return;  
//     }
// };
const [state,dispath] = useReducer(reducer,{red:0, green:0, blue:0});

const { red, green, blue}=state;
    return (
        <View>
            {/* <ColorCounter 
            onIncrease ={() => setColor('red', COLOR_INCREMENT)}
            onDecrease ={() => setColor('red',  -1 * COLOR_INCREMENT)}  
            color="Red"/> */}



<ColorCounter 
            onIncrease ={() => dispath ({type:'change_red' ,playload: COLOR_INCREMENT})}
            onDecrease ={() => dispath ({type:'change_red' ,playload: -1 * COLOR_INCREMENT})}  
            color="Red"/>
{/* 
            <ColorCounter 
            onIncrease ={() => setColor('green', COLOR_INCREMENT)}
            onDecrease ={() => setColor('green',  -1 * COLOR_INCREMENT)}
            color="Green"/> */}
             <ColorCounter 
            onIncrease ={() =>dispath ({type:'change_green' ,playload: COLOR_INCREMENT})}
            onDecrease ={() =>dispath ({type:'change_green' ,playload: -1 * COLOR_INCREMENT}) }
            color="Green"/> 

            

<ColorCounter 
          onIncrease={() =>dispath ({type:'change_blue' ,playload: COLOR_INCREMENT})}
          onDecrease ={() =>dispath ({type:'change_    blue' ,playload: -1 * COLOR_INCREMENT})}
            color="Blue"/>

            {/* <ColorCounter 
          onIncrease={() => setColor('blue', COLOR_INCREMENT)}
          onDecrease ={() => setColor('blue',  -1 * COLOR_INCREMENT)}
            color="Blue"/> */}



     <View style={{height:150,width:150,backgroundColor:`rgb(${red},${green},${blue})`}}></View>
        </View>
    );
};
const styles = StyleSheet.create({

});
export default SquareScreen