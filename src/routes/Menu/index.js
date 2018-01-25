import Menu from './routes/Menu';
import Appetizers from './routes/Appetizers';
import Burgers from './routes/Burgers';

import { StackNavigator } from 'react-navigation';

const routeConfig = {
  Menu: { screen: Menu },
  Appetizers: { screen: Appetizers },
  Burgers: { screen: Burgers },
}

const StackNavigatorConfig = {
  headerMode: 'none',
  navigationOptions: {
    headerBackTitleStyle: {
      color: 'red',
    },
    headerTintColor: 'red'
  }
}

export default StackNavigator(routeConfig, StackNavigatorConfig);
