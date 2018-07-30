import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import "@expo/vector-icons"

class Menu extends React.Component {
  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t('food')
  })

  render() {
    const { navigation: { navigate } } = this.props

    console.log(this.props)

    return (
      <View style={styles.view}>
        <ListItem
          underlayColor='transparent'
          title='Burgers'
          onPress={() => navigate('hamburger')}
          titleStyle={styles.title}
          containerStyle={styles.itemContainer}
        />
        <ListItem
          underlayColor='transparent'
          title='Salsiccias'
          onPress={() => navigate('salsiccia')}
          titleStyle={styles.title}
          containerStyle={styles.itemContainer}
        />
        <ListItem
          underlayColor='transparent'
          title='Wurstels'
          onPress={() => navigate('wurstel')}
          titleStyle={styles.title}
          containerStyle={styles.itemContainer}
        />
        <ListItem
          underlayColor='transparent'
          title='Baguettes'
          onPress={() => navigate('baguette')}
          titleStyle={styles.title}
          containerStyle={styles.itemContainer}
        />
        <ListItem
          underlayColor='transparent'
          title='Fries'
          onPress={() => navigate('fried')}
          titleStyle={styles.title}
          containerStyle={styles.itemContainer}
        />
      </View>
    )
  }
}

export default Menu

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#272727'
  },
  title: {
    color: '#FFD700',
    fontSize: 24,
    fontFamily: 'AlegreyaSansSC-Light',
    textAlign: 'center',
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center'
  }
})
