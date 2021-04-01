import React from 'react';
import {View,Text,StyleSheet, FlatList} from 'react-native';
const ListScreen = ()=>{
    const friends=[
        { name:'Friend #1',age:24},
        { name:'Friend #2',age:20},
        { name:'Friend #3',age:23},
        { name:'Friend #4',age:21},
        { name:'Friend #5',age:20},
        { name:'Friend #6',age:29},
        { name:'Friend #7',age:20},
        { name:'Friend #8',age:30},
        { name:'Friend #9',age:24},
        { name:'Friend #10',age:28}
    ];
    return(
       <FlatList

       keyExtractor={friend=>friend.name}
        data={friends}
       renderItem={({item})=>{
           return(
           <View>
           <Text style={styles.testStyle}>Name:-{item.name}- Age- {item.age}`</Text>
           
           </View>
           ) ;
       }}
       />
    );
};
const styles= StyleSheet.create({
testStyle:{
    marginVertical:50
}
});
export default ListScreen;