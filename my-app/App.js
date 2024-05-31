import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, SafeAreaView, FlatList, Image, TextInput, Button} from 'react-native';
import  Header  from  "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text>Open up App working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
