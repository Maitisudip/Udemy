import React from 'react';
import { Text, StyleSheet, View,Image } from 'react-native';
const ImageDetail = (props) => {
    return (
        <View>
            <Image source={props.imageSource} style={{width:200,height:100}}/>
            <Text>{props.Score}</Text>
            <Text>{props.title}</Text>

        </View>
    );
};
const styles = StyleSheet.create({

});
export default ImageDetail;