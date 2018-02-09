import React from 'react'
import { View, Platform, Linking, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native'
import { MapView, WebBrowser } from 'expo'
import { Button } from 'react-native-elements'

import mapStyle from  './mapStyle'

const { width, height } = Dimensions.get('window')

export default class Address extends React.Component {
  render() {
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
              pinColor='gold'
            />
          </MapView>
          <View style={styles.buttonContainer}>
            <Button
              raised
              icon={{name: 'ios-locate-outline', type: 'ionicon', color:'gold'}}
              title='Navigate'
              color='gold'
              backgroundColor='rgba(60,60,60,0.6)'
              containerViewStyle={[styles.radius, {backgroundColor: 'transparent'}]}
              borderRadius={styles.radius}
              onPress={
                Platform.select({
                  ios: () => { WebBrowser.openBrowserAsync('https://goo.gl/maps/uVTyfJzC8662') },
                  android: () => { WebBrowser.openBrowserAsync('https://goo.gl/maps/uVTyfJzC8662') }
                })
              }
            />
            <TouchableOpacity
              onPress={
                Platform.select({
                  ios: () => { WebBrowser.openBrowserAsync('https://goo.gl/maps/uVTyfJzC8662') },
                  android: () => { WebBrowser.openBrowserAsync('https://goo.gl/maps/uVTyfJzC8662') }
                })
              }
              style={[styles.bubble, styles.button]}
            >
              <Text style={styles.buttonText}>Click</Text>
            </TouchableOpacity>
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

Address.navigationOptions = {
  title: 'Address'
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
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
