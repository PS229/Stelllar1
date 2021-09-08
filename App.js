import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import SpaceCraft from '../screens/spaceCraft'
import DailyPic from '../screens/dailyPic'
import StarMap from '../screens/starMap'

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screenOptions = {{
        headerShown:false
      }}>
        <Stack.Screen name = "Spacecraft" component = {SpaceCraft}/>
        <Stack.Screen name = "Daily Pics" component = {DailyPic}/>
        <Stack.Screen name = "Star Map" component = {StarMap}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
