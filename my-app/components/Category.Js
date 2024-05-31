import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Category = ({ title, tasks, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.tasks}>{tasks} Tasks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
  },
  tasks: {
    fontSize: 16,
    color: "#888",
  },
});

export default Category;