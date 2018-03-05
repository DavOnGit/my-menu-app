import React from 'react'
import { Asset, AppLoading, Font } from 'expo'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, AsyncStorage } from 'react-native'

import { firebaseRef } from './src/firebase'
import Root from './src/Root'

console.ignoredYellowBox = [ 'Setting a timer', 'Remote debugger is in a background tab' ]

async function checkConnection() {
  try {
    const res = await fetch('https://google.com');
    if (res.status === 200) return true;
  } catch (e) {
    console.log(e.message)
  }
  return false
}

async function syncStore() {console.log('***** sync started ******')
  const isConnected = await checkConnection()
  if (!isConnected) {
    setTimeout(syncStore, 10000)
    return null
  }

  try {console.log('FkUUU!')
    const updateTag = await firebaseRef.child('updates/').once('value')
    const updateString = JSON.stringify(updateTag.val())
    console.log(updateString)
    const localString = await AsyncStorage.getItem('updates')

    if (localString !== updateString) {
      const fdata = await firebaseRef.once('value')
      console.log('FkU!', fdata.val().ontap)
      await AsyncStorage.multiSet([
        ['updates', JSON.stringify(fdata.val().updates)],
        ['ontap', JSON.stringify(fdata.val().ontap)],
      ])
    }
  }
  catch (error) {
    console.log(error.message)
  }
  const cazz = await AsyncStorage.getAllKeys()
  console.log('saved: ', cazz)
}

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync()
    }
  })
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class App extends React.Component {
  state = {
    assetsLoaded: false,
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/images/logo.png'),
      /*'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',*/
    ])

    const fontAssets = cacheFonts([
      { 'AlegreyaSansSC-Light': require('./assets/fonts/AlegreyaSansSC-Light.ttf') },
      { 'AlegreyaSansSC-Medium': require('./assets/fonts/AlegreyaSansSC-Medium.ttf') },
      { 'AlegreyaSansSC-Regular': require('./assets/fonts/AlegreyaSansSC-Regular.ttf') },
      { 'AlegreyaSansSC-Thin': require('./assets/fonts/AlegreyaSansSC-Thin.ttf') },
    ])

    await Promise.all([...imageAssets, ...fontAssets]);
    //syncStore()
    //console.log(syncStore())
    console.log('Assets Loaded')
  }

  render() {
    const LoadingView = (
      <AppLoading
        startAsync={this._loadAssetsAsync}
        onFinish={() => this.setState({ assetsLoaded: true })}
        onError={console.warn} />
    )

    return (
      <SafeAreaView style={styles.safeArea}>
        {!this.state.assetsLoaded ?
          LoadingView : (
          <View style={styles.container}>
            <StatusBar translucent backgroundColor="#474747"/>
            <Root />
          </View>
        )}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#272727'
  },
  container: {
    flex: 1,
    //justifyContent: 'center',
    // NOTE: for ios add this: react-native-status-bar-size
    //paddingTop: (Platform.OS == 'ios') ? 0 : StatusBar.currentHeight || (Platform.Version < 23 ? 25 : 24)
  },
})
