import React from 'react';
import {NavigationType} from '.';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Screen1 from '../screens/Screen1';
import SearchCountryScreen from '../screens/SearchCountryScreen';

const Stack = createNativeStackNavigator<NavigationType>();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="SearchCountryScreen"
          component={SearchCountryScreen}
        />
        <Stack.Screen name="Screen1" component={Screen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
