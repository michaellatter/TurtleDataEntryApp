import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { useTheme } from '../context/ThemeContext';

const DropdownMenu = ({ label, options, selectedValue, onValueChange, style, width }) => {
  const { theme } = useTheme();
  const dropDownMenuWidth = `${parseFloat(width)* 0.87}%`;

  return (
    <View style={[styles.container, style, { width }]}>
      <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
      <View style={[styles.dropdownContainer, { backgroundColor: theme.rectangle, borderColor: theme.text }]}>
        <ModalDropdown
          options={options}
          defaultValue={selectedValue}
          onSelect={(index, value) => onValueChange(value)}
          textStyle={[styles.dropdownText, { color: theme.text }]}
          dropdownStyle={[styles.dropdown, { width: dropDownMenuWidth }]}
          dropdownTextStyle={[styles.dropdownText, { backgroundColor: theme.rectangle, color: theme.rectangleText }]}
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
    borderRadius: 5,
    padding: 10,
  },
  dropdownButton: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 5,
  },
});
