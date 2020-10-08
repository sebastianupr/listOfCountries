export default function reducer(state, action){
  switch (action.type) {
    case 'SET_COUNTRY_LIST':
      return {...state, countries: action.payload, countriesSearch: action.payload}
    case 'SET_COUNTRY_SEARCH': {
      return {...state, countriesSearch: action.payload }
    }
    case 'SET_COUNTRY_BY_REGION': {
      const { regionSelected, countriesByRegion } = action.payload

      return {...state,
          regionSelected,
          countriesSearch: countriesByRegion
      }
    }
    default: return state
  }
}
