import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen';
import ComponentsScreen from '../screens/ComponentsScreen';
import ListScreen from '../screens/ListScreen';
import ImageScreen from '../screens/ImageScreen';
import CounterScreen from '../screens/CounterScreen';
import ColorScreen from '../screens/ColorScreen';
import SquareScreen from '../screens/SquareScreen'
import TextScreen from '../screens/TextScreen';
import BoxScreen from '../screens/BoxScreen';

const Stack = createStackNavigator();

export default function MainNavigation() {


    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name='Components' component={ComponentsScreen} />
                    <Stack.Screen name='List' component={ListScreen} />
                    <Stack.Screen name='Image' component={ImageScreen} />
                    <Stack.Screen name='Counter' component={CounterScreen} />
                    <Stack.Screen name='Color' component={ColorScreen} />
                    <Stack.Screen name="Squar" component={SquareScreen}/>
                    <Stack.Screen name="Text" component={TextScreen}/>
                    <Stack.Screen name="Box" component={BoxScreen}/>
                </Stack.Navigator>
                
            </NavigationContainer>
        </SafeAreaProvider>

    );
}