import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import MenuNavigator from './MenuNavigator'
import { firebaseRef } from '../../firebase'

class MenuNavigatorWrapper extends React.Component {
  static router = MenuNavigator.router

  state = {}

  componentDidMount() {
    firebaseRef.child('menu').once('value')
      .then(data => { console.log(data.val()); this.setState({data: data.val()}) })
  }

  render() {console.log('NUUUU', this.props, this.state)
    const navState  = this.props.navigation.state
    console.log('navState: ', navState)
    const routeName = navState.routes[navState.index].routeName
    console.log('dum: ', routeName)
    const selectedData = routeName === 'menu' ? null : this.state.data[routeName]
    console.log('Slice: ', selectedData)
    return(
      <MenuNavigator screenProps={selectedData} navigation={this.props.navigation}/>
    )
  }
}

export default MenuNavigatorWrapper
