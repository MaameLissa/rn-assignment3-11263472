// src/components/Header.js
import React from 'react';
import { View, Text, StyleSheet, Image, Lato, ScreeenLeft} from 'react-native';

const SearchBar = ({ name, taskCount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello , MuseCorp {name}</Text>
      <Text style={styles.taskCount}>{taskCount} 14 tasks today</Text>
      <Image source={require('../assets/usericon.png')} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F7F0E8',
    bottom: 10,
  
  },
  greeting: {
    fontSize: 23,
    fontFamily: Lato,
    lineHeight: 38.4,
  },
  taskCount: {
    fontSize: 10,
    color: '#000000',
    width: 100,
    height: 16,
    right: 175,
    fontfamily: Lato,
    top: 21,
 
  },
  icon: {
    width: 50,
    height: 52,
  },
});

export default SearchBar;