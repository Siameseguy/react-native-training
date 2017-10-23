import { observable } from 'mobx'

class CitiesStore {
  @observable
  cities = [
    { name: 'Chicago', country: 'USA', locations: [] },
    { name: 'Austin', country: 'USA', locations: [] }
  ]

  addCity(city) {
    this.cities.push(city)
  }
}

export default new CitiesStore()
