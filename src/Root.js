import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';

import Home from './routes/Home';
import Menu from './routes/Menu';
import Contact from './routes/Contact';
import Address from './routes/Address/index';

const StackConfig = {
  Home: {
    screen: Home,
    navigationOptions: {}
  },
  Menu: {
    screen: Menu,
    navigationOptions: {}
  },
  Contact: {
    screen: Contact,
    navigationOptions: {}
  },
  Address: {
    screen: Address,
  }
}

const StackStyleConfig = {
  mode: 'modal'
}

export default StackNavigator(StackConfig, StackStyleConfig);

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28
  }
})
