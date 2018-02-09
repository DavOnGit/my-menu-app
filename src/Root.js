import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { StackNavigator, Header } from 'react-navigation';

import Home from './routes/Home'
import Beer from './routes/Beer'
import MenuNavigator from './routes/Menu'
import Contact from './routes/Contact'
import Address from './routes/Address'

const ImageHeader = props => (
  <View style={{ backgroundColor: '#272727' }}>
    <Image
      style={[StyleSheet.absoluteFill, {opacity: 0.5}]}
      source={require('../assets/images/beerfull.jpg')}
    />
    <Header {...props} />
  </View>
)

const StackConfig = {
  Home: {
    screen: Home
  },
  Beer: {
    screen: Beer
  },
  Menu: {
    screen: MenuNavigator
  },
  Contact: {
    screen: Contact
  },
  Address: {
    screen: Address,
  },
}

const styles = {
  header: { backgroundColor: 'transparent'},
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    color: 'gold',
    fontFamily: 'AlegreyaSansSC-Medium',
    fontWeight: 'normal',
    fontSize: 24
  }
}

const StackStyleConfig = {
  navigationOptions: {
    headerTintColor: 'gold',
    headerStyle: styles.header,
    headerTitleStyle: styles.title,
    header: (props) => <ImageHeader {...props} />,
    headerRight: <View />
  },
  cardStyle: { opacity: 1 },
  initialRouteName: 'Home'
}

export default StackNavigator(StackConfig, StackStyleConfig);
