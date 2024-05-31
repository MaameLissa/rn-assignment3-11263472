// src/components/Header.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = ({ name, taskCount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello, {name}</Text>
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
    backgroundColor: '#f5f5f5',
  },
  greeting: {
    fontSize: 24,
  },
  taskCount: {
    fontSize: 16,
    color: '#888',
    
  },
  icon: {
    width: 50,
    height: 52,
  },
});

export default Header;