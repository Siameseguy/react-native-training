import React, { Component } from 'react'
import { View, Dimensions, Animated, Text, Easing } from 'react-native'
import Tabs from './src/Tabs.js'
import { createStore, appplyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'
import PropTypes from 'prop-types'

const store = createStore(rootReducer)

// 1. import animated from 'react-native'
// 2. create animated value
// 3. attach animated value to style a property
// 4. create and invoke function that changees anmiated value

const { width, height } = Dimensions.get('window')

class App extends React.Component {
  static childContextTypes = {
    name: PropTypes.string
  }

  getChildContext() {
    return {
      name: 'Nader'
    }
  }

  animatedMargin = new Animated.Value(0)
  animatedColor = new Animated.Value(0)
  animatedRotate = new Animated.Value(0)
  animate = () => {
    Animated.parallel([
      Animated.timing(this.animatedMargin, {
        toValue: height,
        duration: 350,
        easing: Easing.bounce
      }),
      Animated.timing(this.animatedColor, {
        toValue: 1,
        duration: 500
      })
    ]).start(this.animate)
  }

  render() {
    const backgroundColor = this.animatedColor.interpolate({
      inputRange: [0, 0.25, 1],
      outputRange: ['red', 'orange', 'black']
    })

    const rotation = this.animatedMargin.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <Provider store={store}>
        <Tabs />
        {/* <Animated.View
          style={{
            justifyContent: 'center',
            transform: [
              {
                rotate: rotation
              }
            ],
            position: 'absolute',
            width,
            height,
            backgroundColor,
            top: 0,
            left: 0
          }}
        >
          <Text>Welcome to Cities</Text>
          <Text onPress={this.animate}>Welcome to Cities</Text>
        </Animated.View> */}
      </Provider>
    )
  }
}

export default App
