import React from 'react'
import { connect } from 'react-redux'

import { selectCompany } from '../../redux/persons/persons.actions'
import Select from '../../components/select.component'
import Container from '../../components/container.component.jsx'

const Available = ({ availablePersons, companies, selectCompany }) => (
  <Container>
    <h3>Tillgängliga personer</h3>
    {availablePersons.map((person, personIndex) => (
      <div style={{ margin: "20px 0" }} key={personIndex}>
        {person.name}
        <Select
          onChange={(event) => selectCompany(person.id, Number.parseInt(event.target.value))}
          value={person.companyId}
        >
          <option key={-1} value={-1}>Inget valt</option>

          {companies.map((company, companyIndex) => (
            <option
              key={companyIndex}
              value={companyIndex}
            >
              {company.name}
            </option>
          ))}
        </Select>
      </div>
    ))}
  </Container>
)

const mapStateToProps = ({ persons: { persons }, companies: { companies } }) => ({
  availablePersons: persons.filter((person) => person.companyId === -1),
  companies
})

const mapDispatchToProps = dispatch => ({
  selectCompany: (personId, companyId) => dispatch(selectCompany(personId, companyId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Available)
