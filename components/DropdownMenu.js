import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { useTheme } from '../context/ThemeContext';

const DropdownMenu = ({ label, options, selectedValue, onValueChange }) => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
      <View style={[styles.dropdownContainer, { backgroundColor: theme.rectangle, borderColor: theme.text }]}> 
        <ModalDropdown
          options={options}
          defaultValue={selectedValue}
          onSelect={(index, value) => onValueChange(value)}
          textStyle={[styles.dropdownText, { color: theme.text }]}
          dropdownStyle={[styles.dropdown, { backgroundColor: theme.rectangle }]}
          dropdownTextStyle={[styles.dropdownTextStyle, { color: theme.text }]}
          style={[styles.dropdownButton, { backgroundColor: theme.rectangle }]}
        />
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
    width: 170,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
  dropdownButton: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  dropdownText: {
    fontSize: 16,
    backgroundColor: 'transparent',
  },
  dropdownTextStyle: {
    fontSize: 16, 
    backgroundColor: 'transparent',
  },
  dropdown: {
    width: 150, // Set the width of the dropdown menu
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
});
