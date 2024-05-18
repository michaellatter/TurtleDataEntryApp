import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WaitingPage from '../components/WaitingPage'; // Adjust the path as necessary
import NavigationPage from '../components/NavigationPage'; // Adjust the path as necessary
import NestingDatasheetPage from '../components/NestingDatasheetPage'; // Adjust the path as necessary

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WaitingPage">
        <Stack.Screen name="WaitingPage" component={WaitingPage} options={{ headerShown: false }} />
        <Stack.Screen name="NavigationPage" component={NavigationPage} options={{ headerShown: false }} />
        <Stack.Screen name="NestingDatasheetPage" component={NestingDatasheetPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
