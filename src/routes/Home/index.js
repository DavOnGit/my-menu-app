import React from 'react';
import { Linking, Text, Image, View, StyleSheet, Dimensions, SafeAreaView } from 'react-native';

import NavLinks from '../../components/NavLinks'

const { width } = Dimensions.get('window');

const Home = ({ navigation: { navigate } }) => {//console.log('HOME PROPS:\n', props)
  return (
  <View style={[styles.container, styles.bgColor]}>
    <View style={styles.container}>
      <Image
        resizeMode='cover'
        style={styles.image}
        source={require('../../../assets/images/guacamole.jpg')}
      />
    </View>
    <NavLinks navigate={navigate} />
  </View>
)}

Home.navigationOptions = {
  header: null
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  bgColor: { backgroundColor: '#272727' },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    //width: width,
    //height: 220,
    //maxHeight: 160,
    //borderWidth: 1,
    //borderColor: '#d44'
  },
  title: {
    fontFamily: 'AlegreyaSansSC-Light',
    fontSize: 30,
  },
  subTitle: {
    fontFamily: 'AlegreyaSansSC-Regular',
    fontSize: 16,
  },
  number: {
    color: '#fe0000',
    fontFamily: 'AlegreyaSansSC-Regular',
    fontSize: 12,
    marginTop: 10
  }
})
