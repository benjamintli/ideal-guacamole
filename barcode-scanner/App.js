import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './ui/Homepage.js';
import Info from './ui/Info.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Info/> 
      <Text> Test </Text> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    
    width: '100%'
  },
});
