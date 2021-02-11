const defaultCompanyId = -1
const initialState = {
  persons: [],
  idCounter: 0
}

export default function personsReducer(state = initialState, action) {

  switch (action.type) {
    case 'ADD_PERSON':
      return {
        ...state,
        persons: [...state.persons, {
          id: state.idCounter,
          name: action.payload,
          companyId: defaultCompanyId,
        }],
        idCounter: state.idCounter + 1
      }
    case 'SELECT_COMPANY':
      return {
        ...state,
        persons: [
          ...state.persons.filter(person => person.id !== action.payload.personId),
          {
            ...state.persons[state.persons.findIndex((person) => person.id === action.payload.personId)],
            companyId: action.payload.companyId
          }
        ]
      }
    case 'REMOVE_PERSON_FROM_COMPANY':
      return {
        ...state,
        persons: [
          ...state.persons.filter(person => person.id !== action.payload.id),
          {
            ...state.persons[state.persons.findIndex((person) => person.id === action.payload.id)],
            companyId: defaultCompanyId
          }
        ]
      }
    default:
      return state
  }
}
