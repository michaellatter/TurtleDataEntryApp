import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../context/ThemeContext'; // Adjust the path as necessary
import BottomNavBar from './BottomNavBar'; // Adjust the path as necessary

const NestingDatasheetPage = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: theme.text }]}>Turtle Nesting</Text>
      </View>
      <View style={styles.separator} />
      {/* Add more content here */}
      <BottomNavBar />
    </View>
  );
};

export default NestingDatasheetPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, // Add padding around the container
  },
  titleContainer: {
    paddingVertical: 20, // Vertical padding to move the title down
    paddingHorizontal: 20, // Horizontal padding to ensure space from the edges
    borderBottomWidth: 1, // Add bottom border
    borderBottomColor: 'grey', // Set the border color
  },
  title: {
    fontSize: 24,
    textAlign: 'left', // Align text to the left
  },
  separator: {
    height: 1,
    backgroundColor: 'grey',
  },
});
