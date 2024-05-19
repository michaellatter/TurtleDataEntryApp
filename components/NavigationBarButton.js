// NavigationBarButton.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext'; // Adjust the path as necessary

const NavigationBarButton = ({ title, icon: Icon, onPress }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {Icon && <Icon width={35} height={35} fill={theme.text} />}
      <Text style={[styles.text, { color: theme.text }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NavigationBarButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 10,
    marginTop:0,
  },
});
