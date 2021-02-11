export const addPerson = name => ({
  type: 'ADD_PERSON',
  payload: name
});

export const selectCompany = (personId, companyId) => ({
  type: 'SELECT_COMPANY',
  payload: {
    personId,
    companyId
  }
});

export const removePersonFromCompany = (person) => ({
  type: 'REMOVE_PERSON_FROM_COMPANY',
  payload: person
});