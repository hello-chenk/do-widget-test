import React from 'react'
import Round from './Round'

describe('<Round />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Round />)
  })
})