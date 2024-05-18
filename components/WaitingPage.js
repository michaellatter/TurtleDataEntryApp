import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WaitingPage = () => {
  const navigation = useNavigation();

  useEffect(() => {
    console.log('WaitingPage mounted, starting timer...');
    const timer = setTimeout(() => {
      console.log('Timer finished, navigating to NavigationPage...');
      navigation.replace('NavigationPage');
    }, 3000); // Simulate a loading time of 3 seconds

    return () => {
      console.log('WaitingPage unmounted, clearing timer...');
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default WaitingPage;
