import React from 'react';
import ToggleBtn from './ToggleBtn';

describe('<ToggleBtn />', () => {
  it('renders', () => {
    cy.mount(<ToggleBtn></ToggleBtn>);
    cy.get('input[type="checkbox"]').then(($checkbox) => {
      expect($checkbox).not.to.be.checked
    })

})
})