import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '../context/ThemeContext';

const DropdownMenu = ({ label, options, selectedValue, onValueChange, style, width, height }) => {
  const { theme } = useTheme();
  const {heightPicker} = parseFloat(height) - 20

  return (
    <View style={[styles.container, style, { width }]}>
      <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
      <View style={[styles.dropdownContainer, { backgroundColor: theme.rectangle, borderColor: theme.textColor, height }]}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => onValueChange(itemValue)}
          style={[styles.picker, { color: theme.text, backgroundColor: theme.rectangle, minHeight: 53 }]} // Adjust height to account for padding
          itemStyle={{ color: theme.rectangleText}}
          >
          {options.map((option, index) => (
            <Picker.Item key={index} label={option} value={option} />
          ))}
        </Picker>
      </View>
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
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5, // Adjust padding as needed
  },
  picker: {
    flex: 1,
  },
});