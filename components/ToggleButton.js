import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, Animated, View } from 'react-native';

// Define the ToggleButton component, which takes `theme` and `toggleTheme` as props
const ToggleButton = ({ theme, toggleTheme }) => {
  // Create a ref for the Animated value `translateX`, initialized to 0
  const translateX = useRef(new Animated.Value(0)).current;

  // Use the `useEffect` hook to run an animation whenever the `theme.name` changes
  useEffect(() => {
    Animated.timing(translateX, {
      toValue: theme.name === 'light' ? 0 : 30, // Move the circle to 0 if light mode, else to 30 if dark mode
      duration: 200, // Animation duration in milliseconds
      useNativeDriver: true, // Use native driver for better performance
    }).start(); // Start the animation
  }, [theme.name, translateX]); // Dependencies array, re-run effect when `theme.name` changes

  return (
    // TouchableOpacity makes the component clickable
    <TouchableOpacity onPress={toggleTheme} style={[styles.toggleButton, { backgroundColor: theme.rectangle }]}>
      {/* Animated.View is used to create the animated switch circle */}
      <Animated.View style={[styles.switchCircle, { backgroundColor: theme.background, transform: [{ translateX }] }]}>
        {/* Display an icon inside the switch circle based on the theme */}
        <Text style={{ color: theme.rectangleText }}>{theme.name === 'light' ? '☀️' : '🌙'}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

// Define styles for the components
const styles = StyleSheet.create({
  // Style for the outer toggle button container
  toggleButton: {
    width: 60, // Width of the toggle button
    height: 30, // Height of the toggle button
    borderRadius: 30, // Rounded corners
    justifyContent: 'center', // Center content vertically
    padding: 5, // Inner padding
    borderWidth: 1, // Border width
    borderColor: 'grey', // Border color
  },
  // Style for the inner switch circle
  switchCircle: {
    width: 20, // Width of the switch circle
    height: 20, // Height of the switch circle
    borderRadius: 10, // Fully rounded circle
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    position: 'absolute', // Positioned absolutely within the toggle button
  },
});

// Export the ToggleButton component as the default export
export default ToggleButton;
