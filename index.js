import { AppRegistry } from 'react-native'
import App from './App'
import debug from 'debug'

console.ignoredYellowBox = ['Remote debugger']

AppRegistry.registerComponent('RNTest', () => App)
