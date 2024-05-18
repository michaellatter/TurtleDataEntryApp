import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { useTheme } from '../context/ThemeContext'; // Adjust the path as necessary
import DatasheetTile from './DatasheetTile';
import ToggleButton from './ToggleButton';
import StackNavigator from '../navigation/StackNavigator';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const NavigationPage = () => {
  const { theme, toggleTheme } = useTheme();
  const navigation = useNavigation(); // Get the navigation object

  const handleTilePress = () => {
    console.log('Datasheet tile pressed');
  };

  const handleNestingDatasheetPress = () => {
    navigation.navigate('NestingDatasheetPage');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.topHalf}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: theme.text }]}>Create new datasheet</Text>
          <ToggleButton theme={theme} toggleTheme={toggleTheme} />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.tileContainer}>
            <DatasheetTile 
              title="Nesting Event 1" 
              onPress={handleNestingDatasheetPress} 
            />
            <DatasheetTile 
              title="Nesting Event 2" 
              onPress={handleTilePress} 
            />
            <DatasheetTile 
              title="Nesting Event 3" 
              onPress={handleTilePress} 
            />
            {/* Add more DatasheetTile components as needed */}
          </View>
        </ScrollView>
      </View>
      <View style={[styles.separator, { backgroundColor: theme.separator }]}></View>
      <View style={styles.bottomHalf}></View>
    </SafeAreaView>
  );
};

export default NavigationPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, // Add padding around the SafeAreaView
    borderWidth: 1,
    borderColor: 'grey', // Add a thin grey border for visualization
  },
  topHalf: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20, // Add some horizontal padding
    borderWidth: 1,
    borderColor: 'grey', // Add a thin grey border for visualization
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', // Take up full width of the container
    paddingHorizontal: 20, // Add horizontal padding to ensure space from the edges
    paddingTop: 10,
    marginBottom: 10, // Move the title down a little
    borderWidth: 1,
    borderColor: 'grey', // Add a thin grey border for visualization
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    marginTop: 10, // Ensure there is some space at the top
    textAlign: 'left', // Align text to the left
  },
  separator: {
    height: 1,
    width: '100%',
    borderWidth: 1,
    borderColor: 'grey', // Add a thin grey border for visualization
  },
  bottomHalf: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'grey', // Add a thin grey border for visualization
  },
  tileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey', // Add a thin grey border for visualization
  },
});
