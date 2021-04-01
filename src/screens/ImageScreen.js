import React from 'react';
import { Text, StyleSheet, View,Image } from 'react-native';
import ImageDetail from '../componets/ImageDetail';
const ImageScreen = (props) => {
    
    return (
        <View>
            <ImageDetail
             title= "Forest"
             Score={9}
             imageSource={require('../../assets/1.jpg')}/>
            <ImageDetail
             title= "River"
             Score={5}
             imageSource={require('../../assets/2.jpg')}/>
            <ImageDetail
             title= "Beach"
             Score={7}
             imageSource={require('../../assets/3.jpg')}/>
            <ImageDetail 
            title= "Ground"
            Score={3}
            imageSource={require('../../assets/4.jpg')}
            />

        </View>
    );
};
const styles = StyleSheet.create({

});
export default ImageScreen;