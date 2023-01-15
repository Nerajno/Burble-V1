import React from 'react';
import ToggleBtn from './ToggleBtn';

describe('ToggleBtn', () => {
  it('toggles the checkbox and calls the onClick prop', () => {
  const spy = cy.spy()
  cy.mount(<ToggleBtn label="Test Label" toggled={false} onClick={spy} />)
  cy.get('input[type="checkbox"]').should('not.be.checked')
  cy.get('input[type="checkbox"]').click()
  cy.get('input[type="checkbox"]').should('be.checked')
  cy.wrap(spy).should('be.calledWith', true)
  cy.get('input[type="checkbox"]').click()
  cy.get('input[type="checkbox"]').should('not.be.checked')
  cy.wrap(spy).should('be.calledWith', false)
  })
  })