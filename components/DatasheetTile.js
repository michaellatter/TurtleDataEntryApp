import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, Image, View } from 'react-native';
import { useTheme } from '../context/ThemeContext'; // Adjusted path

const { width } = Dimensions.get('window');

const DatasheetTile = ({ title, onPress, imageSource }) => {
  const { theme } = useTheme(); // Tells the object to use the theme currently defined by useTheme (which is residing in ???)

  return (

    // Here we define all the 'components' that make up the JS object 'DatasheetTile'
    <View style={styles.tileWrapper}>
      <TouchableOpacity style={[styles.tile, { backgroundColor: theme.rectangle }]} onPress={onPress}>
        <Image source={imageSource} style={styles.image} />
      </TouchableOpacity>
      <Text style={[styles.tileText, { color: theme.rectangleText }]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({ // A dictionary like object that stores different style guide elements. You can point a component to a given style object using Styles.style_element 
  tileWrapper: {
    width: width * 0.25, // 25% of screen width
    alignItems: 'center',
    marginHorizontal: 20, // Increase horizontal margin for a bigger gap between tileWrappers
    marginBottom: 5, // Add space between tiles
  },
  tile: {
    width: '100%', // tile is inside tileWrapper so we want it to use all the space 
    height: width * 0.4, // custom height for the tile
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, 
  },
  image: { 
    width: '80%',
    height: '60%', // Adjust height to make room for the text
    resizeMode: 'contain',
    marginBottom: 10,
  },
  tileText: {
    fontSize: 18,
    marginTop: 10, // Add space between the image and the text
  },
});

export default DatasheetTile;



