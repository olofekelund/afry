import { combineReducers } from 'redux'

import personsReducer from './persons/persons.reducer'
import companiesReducer from './companies/companies.reducer'

export default combineReducers({
  persons: personsReducer,
  companies: companiesReducer
})
