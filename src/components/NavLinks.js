import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Linking, Platform } from 'react-native';
import { Icon } from 'react-native-elements'
import { WebBrowser } from 'expo'
import AppLink from 'react-native-app-link'

export default class NavLinks extends React.Component {

  render() {
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
            <Image source={require('../../assets/images/foodicon.png')} style={styles.imageIcon} />
            <Text style={styles.text}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.canOpenURL('fb://').then(res => {
                if (res) {
                  const slash = Platform.OS === 'ios' ? '?id=' : '/'
                  Linking.openURL(`fb://page${slash}620746404610579/events_list`)
                } else {
                  WebBrowser.openBrowserAsync('https://m.facebook.com/birrotecaattentialluppolo/events')
                }
              })
            }}
            style={styles.linkContainer}
          >
            {/* <Icon
              type='ionicon'
              name='ios-list-box-outline'
              size={48}
              iconStyle={styles.icon}
            /> */}
            <Image source={require('../../assets/images/bookingicon.png')} style={styles.imageIcon} />
            <Text style={styles.text}>Events</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              Linking.canOpenURL('fb://').then(res => {
                if (res) {
                  const slash = Platform.OS === 'ios' ? '?id=' : '/'
                  Linking.openURL(`fb://page${slash}620746404610579/admin_stories`)
                } else {
                  WebBrowser.openBrowserAsync('https://m.facebook.com/birrotecaattentialluppolo/events')
                }
              })
            }}
            style={styles.linkContainer}
          >
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
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { this.props.navigate('Contact') }}
            style={styles.linkContainer}
          >
            <Icon
              type='ionicon'
              name='ios-chatbubbles-outline'
              size={48}
              iconStyle={styles.icon}
            />
            <Text style={styles.text}>Feedback</Text>
          </TouchableOpacity>
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
    flexDirection: 'column',
    backgroundColor: '#272727',
    //flexWrap: 'nowrap',
    //justifyContent: 'flex-start',
    //minHeight: 200,
    //borderWidth: 1,
    //borderColor: 'yellow',
    marginTop: 0,
    marginHorizontal: 0,
    //padding: 20
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    //alignContent: 'space-around',
    //width: 360,
    //minWidth: 260,
    // borderWidth: 1,
    // borderColor: 'orange',
    //marginVertical: 10
  },
  linkContainer: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //alignSelf: 'center',
    width: 82,
    height: 82,
    backgroundColor: '#000',
    borderRadius: 5,
    //margin: 10,
    marginBottom: 0,
    // borderWidth: 1,
    // borderColor: '#444'
  },
  icon: {
    color: 'rgb(240, 212, 98)',
    //fontSize: 48,
    paddingBottom: 5
  },
  imageIcon: {
    height: 48,
    width: 48,
    marginBottom: 5,

  },
  text: {
    fontFamily: 'AlegreyaSansSC-Regular',
    fontSize: 18,
    color: 'rgb(240, 212, 98)',
  }
})
