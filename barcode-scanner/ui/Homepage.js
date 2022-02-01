import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, ListView, Button} from 'react-native';


export default class Main extends React.Component {
  constructor() {
    super(); 
    this.state = {}
  }

  render() {
    return (
        <View style = {styles.container}>
          <Text>Test to see if this works</Text> 
        </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    marginTop: 50
  }
});

