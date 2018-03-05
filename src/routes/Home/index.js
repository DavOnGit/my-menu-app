import React from 'react'
import { Linking, Text, Image, View, StyleSheet, Animated, Dimensions, Easing } from 'react-native'
import { Tile } from 'react-native-elements'

import NavLinks from '../../components/NavLinks'

class Home extends React.Component {
  state = {
    scale: new Animated.Value(0)
  }

  handler = dim => {
    const { width, height } = dim.window
    this.setState({ orientation: height >= width ? 'column' : 'row' })
  }

  componentWillMount() {
    const dim = Dimensions.get("window")
    this.handler({ window: dim })
  }

  componentDidMount() {
    Dimensions.addEventListener("change", this.handler)

    Animated.timing(this.state.scale, {
      toValue: 120,
      duration: 500,
      delay: 100,
      easing: Easing.linear(),
    }).start()
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.handler)
  }

  render() {//console.log('FkU!', this.props)
    const { orientation, scale } = this.state
    const { navigation: { navigate } } = this.props
    return (
      <View style={[styles.wrapper, styles.bgColor, { flexDirection: orientation }]}>
        <View style={ { flex: 2} }>
          <Image style={ [{flex:  1, backgroundColor: '#FFB800', width: undefined, height: undefined}] } source={require('../../../assets/images/beerfull.jpg')}/>
          <View style={ [{position: 'absolute', width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}] }>
            <Text style={[styles.title]}>Attenti</Text>
            <Text style={[styles.title, {fontSize: 16, marginTop: -12, marginBottom: -18}]}>al</Text>
            <Text style={[styles.title]}>Luppolo</Text>
            <Animated.View
              style={{flex: -1, justifyContent: 'center', alignItems: 'center', width: 120, height: 120, borderRadius: 700, backgroundColor: '#272727' }}
            >
              <Animated.Image style={ [{resizeMode:'contain', width: scale, height: scale }] } source={require('../../../assets/images/testa_colored.png')} />
            </Animated.View>
            <Text style={[styles.caption, {paddingBottom: 25}]}>
              craft beers & eatings
            </Text>
          </View>
        </View>
        <NavLinks navigate={navigate} />
      </View>
    )
  }
}

Home.navigationOptions = {
  header: null
}

export default Home

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width: undefined,
    height: undefined
  },
  bgColor: {
    backgroundColor: '#272727'
  },
  title: {
    fontFamily: 'AlegreyaSansSC-Medium',
    fontSize: 46,
    fontWeight: 'normal',
    color: '#272727',
    textAlign: 'center'
  },
  caption: {
    fontFamily: 'AlegreyaSansSC-Medium',
    fontSize: 24,
    color: '#272727'
  }
})
