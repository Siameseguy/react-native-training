import Cities from './Cities'
import City from './City'

import { colors } from '@src/theme'

import { StackNavigator } from 'react-navigation'

const Nav = {
  Cities: { screen: Cities },
  City: { screen: City }
}

const NavConfig = {
  navigationOptions: {
    headerStyle: { backgroundColor: colors.primary }
  },
  headerTintColor: '#fff'
}

export default StackNavigator(Nav, NavConfig)
