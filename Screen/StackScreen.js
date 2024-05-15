import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './loginScreen';

const Stack = createStackNavigator();

export const StackScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='loginScreen'>
                <Stack.Screen name='loginScreen' component={LoginScreen} options={{
                    headerShown: false
                }} />
                <Stack.Screen name='Home' component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}