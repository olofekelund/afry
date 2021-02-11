import React, { useState } from 'react'
import { connect } from 'react-redux'

import Container from '../../components/container.component.jsx'
import Button from '../../components/button.component'
import Input from '../../components/input.component'

import { addCompany } from '../../redux/companies/companies.actions'
import { removePersonFromCompany } from '../../redux/persons/persons.actions'

const Companies = ({ companies, persons, addCompany, removePersonFromCompany }) => {
  const [name, setName] = useState('')
  const [showCompanyId, setShowCompanyId] = useState(undefined)

  return (
    <Container>
      <h3>Företag</h3>
      <Input value={name} onChange={(event) => setName(event.target.value)} />
      <Button
        disabled={name.length < 1}
        onClick={() => {
          addCompany({ name })
          setName('')
        }}>
        Lägg till företag
      </Button>

      {companies.map((company, index) => (
        <div key={company.id}>
          <h4
            onClick={() => setShowCompanyId(company.id)}
            key={index}
            style={{ cursor: 'pointer' }}
          >
            {company.name}
          </h4>

          {
            showCompanyId === company.id ?
              persons.filter(person => person.companyId === company.id).map(person => (
                <div key={person.id}>
                  <span>{person.name}</span>
                  <Button onClick={() => removePersonFromCompany(person)}>Ta bort</Button>
                </div>
              ))
              : null
          }
        </div>
      ))}
    </Container>
  )
}

const mapStateToProps = ({ companies: { companies }, persons: { persons } }) => ({
  companies,
  persons
})

const mapDispatchToProps = dispatch => ({
  addCompany: name => dispatch(addCompany(name)),
  removePersonFromCompany: person => dispatch(removePersonFromCompany(person))
})

export default connect(mapStateToProps, mapDispatchToProps)(Companies)
