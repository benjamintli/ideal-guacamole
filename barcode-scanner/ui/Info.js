import React from 'react';
import {Image,FlatList, StyleSheet, Text, View, Button} from 'react-native';



export default class Info extends React.Component {
  constructor() {
    super(); 
    this.state = {
      ItemName: "Cheerios",
      ItemDescription: "Cheerios has been a family favorite for years. Its wholesome goodness is perfect for toddlers to adults and everyone in between. Made from whole grain oats, and without artificial flavors or colors, they’re naturally low in fat and cholesterol free. These wholesome little “o’s” have only one gram of sugar!",
      Diet = { 
        DietName: "Vegan",
        DietDescription: "Whole Grain Oats, Corn Starch, Sugar, Salt, "
      }
    }
  }

  render() {
    return (
      <View style = {styles.main}> 
        <View style = {styles.container}>
        <Text style = {styles.headerStyle}>{this.state.ItemName}</Text>
        </View>
        <View style={{flex: 2}}>
        <View style={styles.imgRow}> 
          <View style={styles.imgLocation}> 
            <Image style = {styles.image} source={require('../assets/Cheerios.png')}/>
          </View>
          <View style = {styles.Infoholder}>
            <Text>{this.state.ItemDescription}</Text>
          </View>
        </View>
        </View> 
        <View style={{flex: 3}} >
          <View style = {styles.restrictionHeader}>
            <Text style = {styles.dietHeader}>Halal</Text>
          </View>
          <View style = {styles.restrictionItems}>
            <Text>Whole Grain Oats, Corn Starch, Sugar, Salt, Tripotassium Phosphate. Vitamin E (mixed tocopherols) Added to Preserve Freshness.</Text>
          </View>
          <View style = {styles.restrictionHeader}>
            <Text style = {styles.dietHeader}>Vegan</Text>
          </View>
          <View style = {styles.restrictionItems}>
            <Text>Whole Grain Oats, Corn Starch, Sugar, Salt, Tripotassium Phosphate. Vitamin E (mixed tocopherols) Added to Preserve Freshness.</Text>
          </View>
          <View style = {styles.restrictionHeader}>
            <Text style = {styles.dietHeader}>Dairy</Text>
          </View>
          <View style = {styles.restrictionItems}>
            <Text>Whole Grain Oats, Corn Starch, Sugar, Salt, Tripotassium Phosphate. Vitamin E (mixed tocopherols) Added to Preserve Freshness.</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: 50,
    width: '100%',
    marginBottom:20
  },
  main:{ 
    flex:1,
    //backgroundColor: "green",
    marginLeft: 0,
    marginRight: 0,
  },
  headerStyle: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '100',
  },
  imgRow: {
    flex: 0,
    flexDirection: 'row'
  },
  imgLocation: {
    flex: 4,
    padding: 10,
    //backgroundColor: 'yellow'
  },
  Infoholder: {
    flexDirection: 'column',
    flex:4,
    padding:5,
    //backgroundColor: "blue"
  },
  restrictionHeader: {
    //backgroundColor: 'pink'
  },
  restrictionItems: {
    //backgroundColor: 'brown',
  },
  dietHeader: {
    //backgroundColor: "yellow",
    padding: 5,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '100',
  },
  image:{
    width:  180,
    height: 180,
  }
});
