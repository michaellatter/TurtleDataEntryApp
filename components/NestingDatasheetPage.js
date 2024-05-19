import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import NavigationBar from './NavigationBar';
import TextField from './TextField';
import DropDownMenu from './DropdownMenu';

const screenWidth = Dimensions.get('window').width;
const speciesOptions = ['Loggerhead', 'Flatback', 'Green', 'Hawksbill', 'Olive Ridley', 'Kemps Ridley'];
const activityOptions = ['Laid', 'No Lay', 'Laid/Disturb'];

const NestingDatasheetPage = () => {
  const { theme } = useTheme();
  const [tag, setTag] = useState('');
  const [species, setSpecies] = useState(speciesOptions[0]);
  const [activity, setActivity] = useState(activityOptions[0]);

  return (
    <>
      <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: theme.text }]}>Turtle Nesting</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>IDENTIFICATION</Text>
          <View style={screenWidth > 600 ? styles.row : styles.column}>
            <TextField
              label="Tag Number"
              value={tag}
              onChangeText={setTag}
            />
            <DropDownMenu
              label="Species"
              options={speciesOptions}
              selectedValue={species}
              onValueChange={setSpecies}
            />
            <DropDownMenu
              label="Nesting Activity"
              options={activityOptions}
              selectedValue={activity}
              onValueChange={setActivity}
            />
          </View>
        </View>
        <View style={styles.separator} />
      </ScrollView>
      <NavigationBar />
    </>
  );
};

export default NestingDatasheetPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titleContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  title: {
    fontSize: 24,
    textAlign: 'left',
  },
  separator: {
    height: 1,
    backgroundColor: 'grey',
  },
  section: {
    margin: 20,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column'
  }, 
});

