import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  PanResponder,
  AppState,
  FlatList
} from 'react-native'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import CitiesStore from '../../CitiesStore'
import { observer } from 'mobx-react'

const { width, height } = Dimensions.get('window')

@observer
class Cities extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Image
        source={require('../../assets/citieslogo.png')}
        style={{ width: 120, height: 32 }}
        resizeMode="contain"
      />
    )
  }

  static contextTypes = {
    store: PropTypes.object
  }

  // componentWillMount() {
  //   this.panResponder = PanResponder.create({
  //     onStartShouldSetPanResponder: () => true,
  //     onStartShouldGetPanResponderCapture: () => true,
  //     onMoveShouldSetPanResponder: () => true,
  //     onMoveShouldSetPanResponderCapture: () => true,
  //     onPanResponderMove: (evt, gestureState) => {
  //       console.log('gestureState: ', gestureState)
  //       console.log('evt: ', evt.nativeEvent.value)
  //     }
  //   })
  // }

  componentDidMount() {
    AppState.addEventListener('change', this.appStateChange)
  }
  appStateChange = currentState => {
    console.log('currentState: ', currentState)
  }

  renderItem = ({ item }) => {
    console.log('this: ', this)
    console.log(this.context.store.getState())
    const { cities } = this.props.citiesInfo
    const { navigation } = this.props
    return (
      <ListItem
        onPress={() => navigation.navigate('City', item)}
        title={item.name}
      />
    )
  }

  render() {
    const { cities } = this.props.citiesInfo
    return (
      <View style={styles.container}>
        <FlatList
          data={Object.values(cities)}
          renderItem={this.renderItem}
          keyExtractor={item => item.name}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  citiesInfo: state.citiesReducer
})

export default connect(mapStateToProps)(Cities)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
