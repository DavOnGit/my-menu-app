import React from 'react'
import { Linking, Text, Image, View, StyleSheet, Dimensions, SafeAreaView } from 'react-native'
import { Tile } from 'react-native-elements'

import NavLinks from '../../components/NavLinks'

const { width } = Dimensions.get('window');

const Home = ({ navigation: { navigate } }) => {//console.log('HOME PROPS:\n', props)
  return (
  <View style={[styles.container, styles.bgColor]}>
    <View style={[styles.container]}>
      <Tile
        imageSrc={require('../../../assets/images/beerfull.jpg')}
        title={'Attenti al\nLuppolo'}
        titleStyle={styles.title}
        captionStyle={styles.caption}
        caption={'beer & eatings'}
        featured
        activeOpacity={1}
        //resizeMode='cover'
        //style={styles.image}
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
    fontFamily: 'AlegreyaSansSC-Regular',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#272727'
  },
  caption: {
    fontFamily: 'AlegreyaSansSC-Medium',
    fontSize: 20,
    color: '#272727'
  },
  number: {
    color: '#fe0000',
    fontFamily: 'AlegreyaSansSC-Regular',
    fontSize: 12,
    marginTop: 10
  }
})
