import React from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import { colors } from '@src/theme'
import { addCity } from '../../reducers/citiesReducer'
import { connect } from 'react-redux'

import CitiesStore from '../../CitiesStore'

class AddCityTab extends React.Component {
  state = {
    city: {
      name: '',
      country: ''
    }
  }

  addCity = () => {
    this.props.dispatchAddCity(this.state.city)
    this.setState({
      city: {
        name: '',
        country: ''
      }
    })
    this.props.navigation.navigate('CitiesTab')
  }

  onChangeText = (key, value) => {
    this.setState({
      city: {
        ...this.state.city,
        [key]: value
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/citieslogo.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <TextInput
          value={this.state.city.name}
          placeholder="city"
          style={styles.input}
          onChangeText={text => this.onChangeText('name', text)}
        />
        <TextInput
          value={this.state.city.country}
          placeholder="Country"
          style={styles.input}
          onChangeText={text => this.onChangeText('country', text)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add City" onPress={this.addCity} />
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = {
  dispatchAddCity: city => addCity(city)
}

export default connect(null, mapDispatchToProps)(AddCityTab)

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 10,
    flex: 1
  },
  image: {
    width: '100%',
    height: 48,
    marginTop: 140
  },
  input: {
    marginTop: 10,
    backgroundColor: '#fafafa',
    height: 50
  },
  buttonContainer: {
    marginTop: 10
  }
})
