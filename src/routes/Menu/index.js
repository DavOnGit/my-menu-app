import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import MenuNavigator from './MenuNavigator'
import { firebaseRef } from '../../firebase'

class MenuNavigatorWrapper extends React.Component {
  static router = MenuNavigator.router

  state = { data: null }

  componentDidMount() {
    const locale = this.props.screenProps.locale.substring(0,2)

    firebaseRef.child(`menu/${locale}`).once('value')
      .then(data => { this.setState({data: data.val()}) })
  }

  render() {
    const { data } = this.state
    const navState  = this.props.navigation.state
    //console.log('navState: ', navState)
    const routeName = navState.routes[navState.index].routeName
    //console.log('dum: ', routeName)
    const selectedData = (routeName === 'menu' || !data) ? null : data[routeName]
    //console.log('Slice: ', selectedData)
    return(
      <MenuNavigator screenProps={{data: selectedData, ...this.props.screenProps}} navigation={this.props.navigation}/>
    )
  }
}

export default MenuNavigatorWrapper
