import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green}, ${blue})`;
}
const ColorScreen = (props) => {
    const [colors, setColors] = useState([]);
    return (
        <View>
            <Button
                title="Add a Color"
                onPress={() => {
                    setColors([...colors, randomRgb()])
                }}
            />

            <FlatList
                numColumns={4}
                keyExtractor={item => item} 
                data={colors}
                renderItem={({ item }) => {
                    return(
                    <View
                        style={{ height: 50, width: '25%', backgroundColor: item }} />
                    );
                }}
                 />
        </View>
    );
};
const styles = StyleSheet.create({

});
export default ColorScreen