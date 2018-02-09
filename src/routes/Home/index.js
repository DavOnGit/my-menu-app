import React from 'react'
import { Linking, Text, Image, View, StyleSheet, Dimensions, SafeAreaView } from 'react-native'
import { Tile } from 'react-native-elements'

import NavLinks from '../../components/NavLinks'

class Home extends React.Component {
  handler = d => {
    const { width, height } = d.window
    this.setState({ orientation: height >= width ? 'column' : 'row' })
  }

  componentWillMount() {
    const dim = Dimensions.get("window")
    this.handler({ window: dim })
  }

  componentDidMount() {
    Dimensions.addEventListener("change", this.handler)
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.handler)
  }

  render() {
    const { orientation } = this.state
    const { navigation: { navigate } } = this.props
    return (
      <View style={[styles.wrapper, styles.bgColor, { flexDirection: orientation }]}>
        <Tile
          imageSrc={require('../../../assets/images/beerfull.jpg')}
          title={'Attenti al\nLuppolo'}
          titleStyle={styles.title}
          titleNumberOfLines={2}
          caption={'beer & eatings'}
          captionStyle={styles.caption}
          containerStyle={[styles.container, { flex: 2 }]}
          imageContainerStyle={[styles.container, styles.bgColor]}
          featured
          activeOpacity={1}
        />
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
    fontFamily: 'AlegreyaSansSC-Regular',
    fontSize: 40,
    fontWeight: 'normal',
    color: '#272727'
  },
  caption: {
    fontFamily: 'AlegreyaSansSC-Medium',
    fontSize: 20,
    color: '#272727'
  }
})
