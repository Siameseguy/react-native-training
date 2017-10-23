import React from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'
import { Icon } from 'react-native-elements'
import { colors } from '@src/theme'

export default class City extends React.Component {
  static navigationOptions = props => ({
    title: props.navigation.state.params.name
  })

  state = { visible: false }
  toggleModal = () => {
    this.setState({ visible: !this.state.visible })
  }

  addLocation = () => {}

  render() {
    return (
      <View style={{ flex: 1, padding: 20, backgroundColor: 'red' }}>
        <Text>hello from city</Text>
        <Icon
          underlayColor={colors.primary}
          onPress={this.toggleModal}
          raised
          color="white"
          name="add"
          containerStyle={{
            backgroundColor: colors.primary,
            position: 'absolute',
            bottom: 10,
            right: 10
          }}
        />
        <Modal visible={this.state.visible} animationType="slide">
          <View style={{ backgroundColor: 'red', flex: 1 }}>
            <Text onPress={this.toggleModal}>Dismiss</Text>
          </View>
        </Modal>
      </View>
    )
  }
}
