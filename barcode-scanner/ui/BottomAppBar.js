import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import History from './History.js'
import Settings from './Settings.js'
import Scanner from '../scanner/Scanner.js'

const HistoryPage = () => <History></History>;

const BarcodeScanner = () => <Scanner></Scanner>;

const SettingsPage = () => <Settings></Settings>;

const BottomAppBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'recents', title: 'Recents', icon: 'history'},
    { key: 'scanner', title: 'Scanner', icon: 'camera' },
    { key: 'settings', title: 'Settings', icon: 'cog'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    recents: HistoryPage,
    scanner: BarcodeScanner,
    settings: SettingsPage,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomAppBar;