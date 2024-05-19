import React from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import { useTheme } from '../context/ThemeContext';

// What are these inputs 
const DropdownMenu = ({ label, options, selectedValue, onValueChange }) => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
      <Picker
        selectedValue={selectedValue}
        style={[styles.picker, { color: theme.text, backgroundColor: theme.rectangle }]}
        onValueChange={onValueChange}
      >
        {options.map((option, index) => (
          <Picker.Item key={index} label={option} value={option} />
        ))}
      </Picker>
    </View>
  );
};

export default DropdownMenu;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  picker: {
    height: 40,
    width: 150,
  },
});
