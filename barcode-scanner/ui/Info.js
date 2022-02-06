import React from 'react';
import { Image, FlatList, StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';

export default class Info extends React.Component {
  constructor() {
    super();
    this.state = {
      baseUrl: "http://world.openfoodfacts.org/api/v0",
      foodFactsData: null,
      isLoading: true,
      productNotFound: true,
      key: '1',
      name: 'Cheerios',
      img: require('../assets/Cheerios.png'),
      description: 'Cheerios has been a family favorite for years. Its wholesome goodness is perfect for toddlers to adults and everyone in between. Made from whole grain oats, and without artificial flavors or colors, they’re naturally low in fat and cholesterol free. These wholesome little “o’s” have only one gram of sugar!',
      diet: [
        { key: 0, name: "Halal", ingredients: "No Haram Ingredients" },
        { key: 1, name: "Vegan", ingredients: "No Animal Based Products" }

      ]
    }
  }

  componentDidMount() {
    this.search(this.props.barcodeData);
  }

  async search(barcode) {
    const { baseUrl } = this.state;
    try {
      console.log(barcode);
      let headers = new Headers({
        "User-Agent": "pp-scanner"
      });
      queryUrl = `${baseUrl}/search/${barcode}.json`;
      console.log(queryUrl);
      const response = await fetch(queryUrl, {
        method: "GET",
        headers: headers
      });
      const json = await response.json();
      if (json["products"] && json["products"][0]) {
        this.setState({productNotFound: false});
        this.setState({ name: json["products"][0]["product_name"]})
        this.setState({ img: json["products"][0]["image_url"]})
      }
      this.setState({ foodFactsData: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  renderLoading(isLoading) {
    if (isLoading) {
      return <ActivityIndicator></ActivityIndicator>
    } else {
      if (this.state.productNotFound) {
        return (
          <View>
            <Text>ProductNotFound</Text>
          </View>
        )
      }
      return (
        <View style={styles.main}>
                <Text>{this.state.name}</Text>
          <View style={styles.container}>
            <Text style={styles.headerStyle}>{this.state.name}</Text>
          </View>
          <View style={{ flex: 2 }}>
          <Text style={styles.headerStyle}>{this.state.name}</Text>
            <View style={styles.imgRow}>
              <View style={styles.imgLocation}>
                <Image style={styles.image} source={{uri: this.state.img}} />
              </View>
              <View style={styles.Infoholder}>
                <Text>{this.state.description}</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 3 }} >
          <Text>{this.state.name}</Text>
            <FlatList
              data={this.state.diet}
              renderItem={({ item }) => <View>
                <View style={styles.restrictionHeader}>
                  <Text style={styles.dietHeader}>{item.name}</Text>
                </View>
                <View style={styles.restrictionItems}>
                  <Text>{item.ingredients}</Text>
                </View></View>} />
          </View>
        </View>
      );
    }
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      this.renderLoading(isLoading)
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: 50,
    width: '100%',
    marginBottom: 20
  },
  main: {
    flex: 1,
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
    flex: 4,
    padding: 5,
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
  image: {
    width: 180,
    height: 180,
  }
});
