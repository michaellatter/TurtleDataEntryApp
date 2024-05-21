import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const TextField = ({ label, value, onChangeText, width }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, {width}]}>
      <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, { color: theme.text, backgroundColor: theme.rectangle }]}
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
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
});
