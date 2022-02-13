import React from 'react';
import { FlatList, Picker, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Checkbox } from 'react-native-paper';


export default class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      options: [
        { itemValue: 'English', ItemIndex: 0 },
        { itemValue: 'French', ItemIndex: 1 },
        { itemValue: 'Chinese', ItemIndex: 2 },
      ],
      selectedValue: 'English',
      diet: [
        { id: 0, key: 'Halal', checked: true },
        { id: 1, key: 'Vegan', checked: true },
        { id: 2, key: 'Kosher', checked: false },
        { id: 3, key: 'Keto', checked: false }
      ],
    }
  }

  componentDidMount() {
    this.getData();
  }

  storeData = async (value) => {
    try {
      const dietValue = JSON.stringify(value);
      await AsyncStorage.setItem('@diet', dietValue);
    } catch (e) {
      console.log("Failed to write to storage" + e);
    }
  }


  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@diet')
      if (value !== null) {
        console.log(JSON.parse(value));
        this.setState({ diet: JSON.parse(value) });
      }
    } catch (e) {
      console.log("Failed to read from storage" + e);
    }
  }


  updateCheck = (item, diet) => {
    let newArray = diet;
    newArray[item.id].checked = !newArray[item.id].checked;
    this.storeData(newArray);
    return newArray;
  }


  render() {
    return (
      <View style={styles.heading}>
        <Text style={styles.header}>Settings</Text>
        <View style={styles.row}>
          <View style={styles.text}></View>
          <Text style={styles.info}>Language:</Text>
          <View style={styles.container}>
            <Picker
              selectedValue={this.state.selectedValue}
              style={styles.picker}
              mode={'dropdown'}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ selectedValue: itemValue })}>
              <Picker.Item label="English" value="English" />
              <Picker.Item label="French" value="French" />
              <Picker.Item label="Chinese" value="Chinese" />
            </Picker>
          </View>

        </View>
        <Text style={styles.dietInfo}>Select Which Diet Information You Want Enabled:</Text>
        <View style={styles.container}>
          <FlatList
            data={this.state.diet}
            renderItem={({ item }) =>
              <View style={styles.dietView}><Text style={styles.dietHeader}>{item.key}</Text><View style={styles.checkBox}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => { this.setState({ diet: this.updateCheck(item, this.state.diet) }) }}>
                  <Text style={styles.buttonText}>{item.checked ? "Disable" : "Enable"}</Text></TouchableOpacity>
              </View></View>}
          />

        </View>
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
  header: {
    padding: 5,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '100',
  },

  picker: {
    marginVertical: 0,
    width: 200,
    padding: 0,
  },
  row: {
    flexDirection: 'row'
  },
  text: {
    backgroundColor: 'green',
    textAlign: 'center',
    justifyContent: 'center',
  },
  info: {
    padding: 5,
    marginTop: 95,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '100',
  },
  container: {
    flex: 1
  },
  dietView: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 5
  },
  checkBox: {
    flex: 4,
    borderWidth: 1,
    textAlign: 'right',
    justifyContent: 'center',
  },
  dietHeader: {
    padding: 5,
    fontSize: 20,
    fontWeight: '100',
  },
  dietInfo: {
    padding: 5,
    marginTop: 5,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '100',
  },
  buttonText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 22,
  }
});
