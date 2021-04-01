import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const BoxScreen = () => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle1}> Child 1</Text>
            <Text style={styles.textStyle2}> Child 2</Text>
            <Text style={styles.textStyle3}> Child 3</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:3,
        borderColor:"black",
    //   flexDirection:'column'       (defult)
        // flexDirection:'row',
        height:200,
        // justifyContent:'center'
    },
    textStyle1:{
        borderWidth:1,
        borderColor:'red',
        textAlign:'center',
        // flex:1,
        // alignSelf:'center'
      
        },
        textStyle2:{
            borderWidth:1,
            borderColor:'green',
            textAlign:'center',
            // flex:1,
            // alignSelf:'flex-end',
            // position:'absolute'
            // top:10,
            // bottom:10,
            // right:10,
            // left:10
        //   ...StyleSheet.absoluteFillObject
            },
            textStyle3:{
                borderWidth:1,
                borderColor:'red',
                textAlign:'center', 
                // flex:1,
                // alignSelf:'flex-start'
              
                },
});



export default  BoxScreen;