import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { ListItem, Button } from 'react-native-elements'

// import Header from '../Header'

import "@expo/vector-icons"

export default class Menu extends React.Component {
  //static navigationOptions = { title: 'Salsiccias' }

  render() {
    const { navigation: { navigate } } = this.props
    console.log(this.props)
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.view}>
          <ListItem
            underlayColor='#489'
            title='Burgers'
            onPress={() => navigate('hamburger')}
            titleStyle={styles.title}
          />
          <ListItem
            underlayColor='transparent'
            title='Salsiccias'
            onPress={() => navigate('salsiccia')}
            titleStyle={styles.title}
          />
          <ListItem
            underlayColor='transparent'
            title='Wurstels'
            onPress={() => navigate('wurstel')}
            titleStyle={styles.title}
          />
          <ListItem
            underlayColor='transparent'
            title='Baguettes'
            onPress={() => navigate('baguette')}
            titleStyle={styles.title}
          />
          <ListItem
            underlayColor='transparent'
            title='Fries'
            onPress={() => navigate('fried')}
            titleStyle={styles.title}
          />
          {/* <Button
            title='Fries'
            color='#605856'
            onPress={() => navigate('fried')}
          /> */}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scroll: {
    //flex: 1,
    backgroundColor: '#272727'
  },
  view: {
    //flex: 1,
    backgroundColor: '#605856'
  },
  title: {
    color: '#FFD700',
    fontSize: 24,
    fontFamily: 'AlegreyaSansSC-Light',
    textAlign: 'center',
  }
})
