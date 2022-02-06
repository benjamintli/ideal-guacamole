import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Info from '../ui/Info.js';

export default class BarcodeScanner extends React.Component {

  constructor() {
    super();
    this.state = {
      hasCameraPermission: null,
      barcodeData: null,
    }
  }

  async componentDidMount() {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  render() {
    const { hasCameraPermission, barcodeData } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }

    if (barcodeData === null) {
      return (
        <View>
          <BarCodeScanner
            onBarCodeScanned={this.handleBarCodeScanned}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
      );
    } else {
      return (
        <View>
          <Info barcodeData={barcodeData}></Info>
        </View>
      );

    }

  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ barcodeData: data });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
