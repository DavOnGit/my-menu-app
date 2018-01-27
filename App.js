import React from 'react';
import { Asset, AppLoading, Font } from 'expo';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';

import Root from './src/Root'

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
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
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
    console.log('Assets Loaded')
  };

  render() {
    const loadingView = (
      <AppLoading
        startAsync={this._loadAssetsAsync}
        onFinish={() => this.setState({ assetsLoaded: true })}
        onError={console.warn} />
    )

    return (
      <SafeAreaView style={styles.safeArea}>
        {!this.state.assetsLoaded ?
          loadingView : (
          <View style={styles.container}>
            <StatusBar />
            <Root />
          </View>
        )}
      </SafeAreaView>
    );
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
    //marginTop: (Platform.OS == 'ios') ? 20 : StatusBar.currentHeight
  },
});
