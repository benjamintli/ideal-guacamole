import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, ListView, Button, TouchableOpacityBase } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default class History extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          key: '1', name: 'Cheerios', img: require('../assets/Cheerios.png'), date:'January 24th 11:00pm',  description:'Cheerios has been a family favorite for years. Its wholesome goodness is perfect for toddlers to adults and everyone in between. Made from whole grain oats, and without artificial flavors or colors, they’re naturally low in fat and cholesterol free. These wholesome little “o’s” have only one gram of sugar!',
          diet: [
            { key: 0, name: "Halal", ingredients: "No Haram Ingredients" },
            { key: 1, name: "Vegan", ingredients: "No Animal Based Products" }

          ]
        },
        {
          key: '2', name: 'Cambells Chunky', date:'January 24th 11:01pm' , img: require('../assets/Cambells.jpeg'),
          diet: [
            { key: 0, name: "Halal", ingredients: "Chicken, Chicken Stock" },
            { key: 1, name: "Vegan", ingredients: "No Animal Based Products" }
          ]
        },
        {
          key: '3', name: 'Kimhci', date:'January 23th 1:04pm', img: require('../assets/kimchi.png'), diet: [
            { key: 0, name: "Halal", ingredients: "No Haram Ingredients" },
            { key: 1, name: "Vegan", ingredients: "No Animal Based Products" }
          ]
        }
      ]
    }
  }

  render() {
    return (
      <View style={styles.heading}>
        <Text style={styles.header}>History</Text>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) =>
            <View style={styles.item}>
              <View style={styles.contentRow}>
                <View><Image style={styles.image} source={item.img} /></View>
                <View>
                  <FlatList
                    data={item.diet}
                    renderItem={({ item }) =><View>
                        <View style={styles.diet}></View>
                        <View><Text style={styles.title}>{item.name}</Text></View>
                        <Text>{item.ingredients}</Text>
                        </View>} />
                        <Text style={styles.date}>Date Scanned: {item.date}</Text>
                </View>
              </View>
            </View>

          }
        />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  heading: {
    flex: 1,
    backgroundColor: "white",
    marginLeft: 0,
    marginRight: 0,
    marginTop: 50
  },
  listview: {
    padding: 10,
    fontSize: 18,
    height: 200,
    width: 100,
    backgroundColor: '#fff'
  },
  item: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: 10
  },
  image: {
    width: 125,
    height: 125
  },
  contentRow: {
    flexDirection: 'row'
  },
  diet: {
    marginTop: 5
  },
  header: {
    padding: 5,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '100',
  },
  title:{
    fontSize: 16,
    fontWeight: 'bold'
  },
  date:{
    color: 'gray'
  }
});
