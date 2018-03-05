import React from 'react'
import { View, Image, StyleSheet, Platform, StatusBar } from 'react-native'
import { StackNavigator, Header } from 'react-navigation'
import { translate } from 'react-i18next'

import i18n from './i18n'
import Home from './routes/Home'
import Beer from './routes/Beer'
import MenuNavigator from './routes/Menu'
import Contact from './routes/Contact'
import Address from './routes/Address'

const ImageHeader = props => (
  <View style={{flex: -1, backgroundColor: '#555'}}>
    <Image
      source={require('../assets/images/testa_colored.png')}
      style={[StyleSheet.absoluteFill, {opacity: 0.2, marginTop: 24, width: undefined, height: undefined}]}
      resizeMode='contain'
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
  header: {
    backgroundColor: 'transparent',
    //height: 54,
    //justifyContent: 'center',
    //alignSelf: 'center',
    //padding: 0,
    //borderColor: '#399',
    //borderWidth: 3
    //...Platform.OS === 'android' ? { paddingTop: StatusBar.currentHeight } : {}
  },
  title: {
    //textAlign: 'center',
    //justifyContent: 'center',
    alignSelf: 'center',
    //color: 'gold',
    fontFamily: 'AlegreyaSansSC-Medium',
    fontWeight: 'normal',
    fontSize: 28,
    //paddingTop: 0,
    //borderColor: '#f53',
    //borderWidth: 1
  }
}

const StackStyleConfig = {
  initialRouteName: 'Home',
  //mode: 'modal',
  headerMode: 'screen',
  cardStyle: { opacity: 1 },
  navigationOptions: {
    headerTintColor: 'gold',
    headerStyle: styles.header,
    headerTitleStyle: styles.title,
    headerForceInset: { top: 'never', horizontal: 'never' },
    header: props => <ImageHeader {...props} />,
    headerRight: <View />
  },
}

const Stack = StackNavigator(StackConfig, StackStyleConfig)

const WrappedStack = () => {
  return <Stack screenProps={{ t: i18n.getFixedT(), locale: i18n.language }} />
}

const ReloadAppOnLanguageChange = translate('common', {
  bindI18n: 'languageChanged',
  bindStore: false
})(WrappedStack)

class Root extends React.Component {
  render() {
    return <ReloadAppOnLanguageChange />
  }
}

export default ReloadAppOnLanguageChange
