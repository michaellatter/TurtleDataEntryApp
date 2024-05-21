import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const TextField = ({ label, value, onChangeText, width, height }) => {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, { width }]}>
      <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, { backgroundColor: theme.rectangle, borderColor: theme.text, color: theme.text, height }]}
      />
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});
