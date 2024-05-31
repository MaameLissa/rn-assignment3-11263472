import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Tasks from "./Screen/Tasks";
export default function App() {
  return (
    <View style={styles.container}>
      <Tasks />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
    alignItems: "center",
    justifyContent: "center",
  },
});