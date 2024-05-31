import react from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, SafeAreaView, FlatList, Image, TextInput, Button} from 'react-native';
import  SearchBar  from  "./components/SearchBar";

export default function App() {
  return (
    <View style={styles.container}>
      <SearchBar/>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
