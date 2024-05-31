import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Text,
} from "react-native";
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";

const categories = [
  {
    id: "1",
    title: "Exercise",
    task: 4,
    image: require("../assets/Exercise.png"),
  },
  {
    id: "2",
    title: "Study",
    task: 4,
    image: require("../assets/study.png"),
  },
  { id: "3", 
  title: "Movies",
  task: 4,
  image: require("../assets/Animation.jpg") },
  {
    id: "4",
    title: "Meditate",
    task: 4,
    image: require("../assets/Meditate.jpg"),
  },
  { id: "5", 
  title: "Paint",
  task: 4,
    image: require("../assets/Paint.jpg") },
  {
    id: "6",
    task: 4,
    title: "Sleep",
    image: require("../assets/sleep.jpg"),
  },
  {
    id: "7",
    task: 4,
    title: "Travel",
    image: require("../assets/Travel.jpg"),
  },
  {
    id: "8",
    title: "Health",
    task: 4,
    image: require("../assets/Health.jpg"),
  },
  {
    id: "9",
    title: "Cook",
    task: 4,
    image: require("../assets/cook.jpg"),
  },
  {
    id: "10",
    title: "Code",
    task: 4,
    image: require("../assets/code.jpg"),
  },
];

const tasks = [
  { id: "1", title: "Cybersecurity" },
  { id: "2", title: "Web Development" },
  { id: "3", title: "UI/UX Design" },
  { id: "4", title: "Networking" },
  { id: "5", title: "Machine Learning" },
  { id: "6", title: "Artificial Intelligence" },
  { id: "7", title: "Digital Marketing" },
  { id: "8", title: "Content Writing" },
  { id: "9", title: "Video Editing" },
  { id: "10", title: "Photography" },
  { id: "11", title: "Scripture Haul" },
  { id: "12", title: "Game Development" },
  { id: "13", title: "Animation" },
  { id: "14", title: "Film Making" },
  { id: "15", title: "Cake Baking" },
];

const Tasks = () => {
  return (
    <ScrollView style={styles.container}>
      <SearchBar />
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <Button title="Filter" onPress={() => {}} />
      </View>
      <Text style={styles.testUpdate}>Categories</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <Category
              key={category.id}
              title={category.title}
              tasks={category.tasks}
              image={category.image}
            />
          ))}
        </View>
      </ScrollView>
      <Text style={styles.textUpdate}>Ongoing Tasks</Text>
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
  },
  searchContainer: {
    flexDirection: "row",
    padding: 20,
    backgroundColor:'#F7F0E8',
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    padding: 9,
    borderWidth: 1,
    borderColor: "Yellow",
    borderRadius: 10,
    
  },
  textUpdate: {
    fontSize: 23,
    padding: 20,
  },
  testUpdate: {
    fontSize: 20,
    width: 170,
    height: 37,
    color: "#000000",
    top: 0,
  },
  horizontalScroll: {
    paddingVertical: 10,
  },
  categoriesContainer: {
    flexDirection: "row",
    padding: 19,
    
  },
  tasksContainer: {
    padding: 20,
  },
  taskItem: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    elevation:2,
  },
});

export default Tasks;