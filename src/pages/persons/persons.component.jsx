import React, { useState } from 'react'
import { connect } from 'react-redux'

import Container from '../../components/container.component.jsx'
import Button from '../../components/button.component'
import Input from '../../components/input.component'
import { addPerson } from '../../redux/persons/persons.actions'

const Persons = ({ persons, addPerson }) => {
  const [name, setName] = useState('')

  return (
    <Container>
      <h2>Personer</h2>
      <Input value={name} onChange={(event) => setName(event.target.value)} />
      <Button
        disabled={name.length < 1}
        onClick={() => {
          addPerson(name)
          setName('')
        }}>
        Lägg till
      </Button>

      {persons.map((person, index) => (
        <h4 key={index}>{person.name}</h4>
      ))}
    </Container>
  )
}

const mapStateToProps = ({ persons: { persons } }) => ({
  persons
})

const mapDispatchToProps = dispatch => ({
  addPerson: name => dispatch(addPerson(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Persons)
