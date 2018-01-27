import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

import { Icon } from 'react-native-elements'

export default class NavLinks extends React.Component {

  render() {console.log('NavLink props', this.props)
    return (
      <View style={styles.mainContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => { this.props.navigate('Beer') }}
            style={styles.linkContainer}
          >
            <Icon
              type='ionicon'
              name='ios-beer-outline'
              size={48}
              iconStyle={styles.icon}
            />
            <Text style={styles.text}>Beer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { this.props.navigate('Menu') }}
            style={styles.linkContainer}
          >
            {/* <Icon
              type='ionicon'
              name='ios-restaurant-outline'
              size={48}
              iconStyle={styles.icon}
            /> */}
            <Image
              source={require('../../assets/images/foodicon.png')}
              style={styles.imageIcon}
            />
            <Text style={styles.text}>Food</Text>
          </TouchableOpacity>
          <View style={styles.linkContainer}>
            {/* <Icon
              type='ionicon'
              name='ios-list-box-outline'
              size={48}
              iconStyle={styles.icon}
            /> */}
            <Image
              source={require('../../assets/images/bookingicon.png')}
              style={styles.imageIcon}
            />
            <Text style={styles.text}>Booking</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.linkContainer}>
            {/* <Icon
              type='ionicon'
              name='ios-megaphone-outline'
              size={48}
              iconStyle={styles.icon}
            /> */}
            <Image
              source={require('../../assets/images/newsicon.png')}
              style={styles.imageIcon}
            />
            <Text style={styles.text}>News</Text>
          </View>
          <View style={styles.linkContainer}>
            <Icon
              type='ionicon'
              name='ios-chatbubbles-outline'
              size={48}
              iconStyle={styles.icon}
            />
            <Text style={styles.text}>Feedback</Text>
          </View>
          <TouchableOpacity
            onPress={() => { this.props.navigate('Address') }}
            style={styles.linkContainer}
          >
            {/* <Icon
              type='ionicon'
              name='ios-map-outline'
              size={48}
              iconStyle={styles.icon}
            /> */}
            <Image
              source={require('../../assets/images/addressicon.png')}
              style={styles.imageIcon}
            />
            <Text style={styles.text}>Address</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    //borderWidth: 3,
    //borderColor: 'yellow'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    //borderWidth: 2,
    //borderColor: 'orange'
  },
  linkContainer: {
    flex: -1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 82,
    //borderWidth: 1,
    //borderColor: '#444'
  },
  icon: {
    color: 'rgb(240, 212, 98)',
    fontSize: 50,
    paddingBottom: 5
  },
  imageIcon: {
    height: 50,
    width: 50
  },
  text: {
    fontFamily: 'AlegreyaSansSC-Regular',
    fontSize: 18,
    color: 'rgb(240, 212, 98)',
  }
})
