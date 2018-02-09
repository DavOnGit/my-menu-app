import React from 'react'
import Menu from './routes/Menu'
import Burgers from './routes/Burgers'
import Salsiccia from './routes/Salsiccia'
import Wurstel from './routes/Wurstel'
import Baguette from './routes/Baguette'
import Fries from './routes/Fries'

import { StackNavigator } from 'react-navigation'
import Header from './Header'

const routeConfig = {
  menu: {
    screen: Menu,
    navigationOptions: { title: 'Menu' }
  },
  hamburger: { screen: Burgers },
  salsiccia: { screen: Salsiccia },
  wurstel: { screen: Wurstel },
  baguette: { screen: Baguette },
  fried: { screen: Fries },
}

const StackNavigatorConfig = {
  headerMode: 'none',
  initialRouteName: 'menu',
  cardStyle: { opacity: 1 }
}

export default StackNavigator(routeConfig, StackNavigatorConfig)
