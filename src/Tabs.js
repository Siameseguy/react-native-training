import React from 'react'

import CitiesTab from './views/Cities/CitiesTab'
import AddCityTab from './views/AddCity/AddCityTab'
import { Image } from 'react-native'

import { TabNavigator } from 'react-navigation'

import { colors } from '@src/theme'

const TabConfig = {
  CitiesTab: {
    screen: CitiesTab,
    navigationOptions: {
      tabBarLabel: 'City',
      tabBarIcon: props => (
        <Image
          source={require('./assets/cityicon.png')}
          style={{ tintColor: props.tintColor, width: 28, height: 28 }}
        />
      )
    }
  },
  AddCityTab: {
    screen: AddCityTab,
    navigationOptions: {
      tabBarLabel: 'Add City',
      tabBarIcon: props => (
        <Image
          source={require('./assets/addicon.png')}
          style={{ tintColor: props.tintColor, width: 28, height: 28 }}
        />
      )
    }
  }
}

const TabStyleConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: colors.primary,
    inactiveTintColor: '#666',
    showIcon: true,
    indicatorStyle: {
      backgroundColor: '#666'
    },
    style: {
      backgroundColor: '#fafafa',
      borderTopWidth: 1,
      borderTopColor: '#ededed'
    }
  }
}

const Tabs = TabNavigator(TabConfig, TabStyleConfig)

export default Tabs
