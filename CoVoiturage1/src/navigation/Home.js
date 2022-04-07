import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';
import OrderScreen from "../screens/OrderScreen";



const Stack = createStackNavigator()

const HomeNavigator = () => {
    return (
        <Stack.Navigator 
        screenOptions={{
            headerShown: false,
        }}>
        
        <Stack.Screen name={'Home'} component={HomeScreen}/>
        <Stack.Screen name={'DestinationSearch'} component={DestinationSearch}/>
        <Stack.Screen name={'SearchResults'} component={SearchResults}/>
        <Stack.Screen name={"OrderPage"} component={OrderScreen} />



    </Stack.Navigator>  
    );
};

export default HomeNavigator;
