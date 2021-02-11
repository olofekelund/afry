const initialState = {

  companies: [],
  idCounter: 0,
}

export default function companiesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_COMPANY':
      const company = {
        ...action.payload,
        id: state.idCounter
      }
      return {
        companies: [...state.companies, company],
        idCounter: state.idCounter + 1
      }
    default:
      return state
  }
}
