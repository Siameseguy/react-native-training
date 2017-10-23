const initialState = {
  cities: {
    Chicago: {
      name: 'Chicago',
      country: 'USA',
      locations: []
    },
    Austin: {
      name: 'Austin',
      country: 'USA',
      locations: []
    }
  }
}

const ADD_CITY = 'ADD_CITY'
const ADD_LOCATION = 'ADD_LOCATION'

export function addCity(city) {
  return {
    type: ADD_CITY,
    city: city
  }
}

export function citiesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CITY:
      return {
        cities: {
          ...state.cities,
          [action.city.name]: action.city
        }
      }
    default:
      return state
  }
}
