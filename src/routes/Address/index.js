import React from 'react'
import { View, Platform, Linking, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native'
import { MapView, WebBrowser } from 'expo'
import { Button } from 'react-native-elements'
import { translate } from 'react-i18next'

import mapStyle from  './mapStyle'

const { width, height } = Dimensions.get('window')

class Address extends React.Component {
  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t('address')
  })

  render() {
    const { t } = this.props
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 40.21081,
            longitude: 16.676378,
            latitudeDelta: 0.00192,
            longitudeDelta: 0.00142,
          }}
          customMapStyle={mapStyle}
          toolbarEnabled={true}
          cacheEnabled
          >
            <MapView.Marker
              coordinate={{latitude: 40.21081, longitude: 16.676378}}
              title='Attenti al Luppolo'
              description='via Giustino Fortunato 69, Policoro (Mt)'
              pinColor='#A1C341'
            />
          </MapView>
          <View style={styles.buttonContainer}>
            <Button
              raised
              icon={{name: 'ios-locate-outline', type: 'ionicon', color:'#272727'}}
              title={t('navigate')}
              color='#272727'
              backgroundColor='#FFD700'
              textStyle={{fontFamily: 'AlegreyaSansSC-Regular', fontSize: 15}}
              borderRadius={styles.radius}
              onPress={
                Platform.select({
                  ios: () => { WebBrowser.openBrowserAsync('https://goo.gl/maps/uVTyfJzC8662') },
                  android: () => { WebBrowser.openBrowserAsync('https://goo.gl/maps/uVTyfJzC8662') }
                })
              }
            />
          </View>
          {/* <Button
            title='Muuuuu'
            onPress={() => {
              Platform.select({
                ios: () => { WebBrowser.openBrowserAsync('http://maps.apple.com/maps?daddr=') },
                android: () => { WebBrowser.openBrowserAsync('http://maps.google.com/maps?daddr=') }
              })
            }}
          /> */}
      </View>
    )
  }
}

export default translate('address')(Address)

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  radius: { borderRadius: 20 },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  button: {
    width: 100,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
})
