import React from 'react';
import { ThemeProvider } from './context/ThemeContext'; // Adjust the path as necessary
import StackNavigator from './navigation/StackNavigator'; // Import the StackNavigator

export default function App() {
  return (
    <ThemeProvider>
      <StackNavigator />
    </ThemeProvider>
  );
}