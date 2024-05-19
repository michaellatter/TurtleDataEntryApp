// NavigationBar.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import NavigationBarButton from './NavigationBarButton';

const NavigationBar = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.rectangle }]}>
      <NavigationBarButton
        title="Home"
        onPress={() => navigation.navigate('NavigationPage')}
      />
      <NavigationBarButton
        title="Data"
        onPress={() => navigation.navigate('DataPage')} // Adjust as necessary
      />
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
});


