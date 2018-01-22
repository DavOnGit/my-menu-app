import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import Home from './tabs/Home';
import Menu from './tabs/Menu';
import Contact from './tabs/Contact';

const TabConfig = {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/images/homeicon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  Menu: {
    screen: Menu,
    navigationOptions: {
      tabBarLabel: 'Menu',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/images/menuicon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  Contact: {
    screen: Contact,
    navigationOptions: {
      tabBarLabel: 'Contact',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/images/contacticon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
}

const TabStyleConfig = {
  tabBarOptions: {
    activeTintColor: '#fff',
  },
}
const RootNavigator = TabNavigator(TabConfig, TabStyleConfig);
const Root = () => <RootNavigator />
export default Root

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28
  }
})

/*import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator, TabNavigator } from 'react-navigation'; // 1.0.0-beta.26

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.18.5

import "@expo/vector-icons"; // 6.2.2

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Change code in the editor and watch it change on your phone!
          Save to get a shareable url.
        </Text>



        <Card title="Local Modules">
          <AssetExample />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});*/
