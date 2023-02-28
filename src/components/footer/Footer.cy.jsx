import React from 'react';
import Footer from './Footer';

// describe('<Footer />', () => {
//     it('renders the footer', () => {
//         cy.mount(<Footer />);
//         cy.get(".footer").should('exist');
//     });
   
// });

describe('Footer ', () => {
    beforeEach(() => {
      cy.mount(<Footer />);
    });
  
    it('displays the Burble logo', () => {
      cy.get('.logo img').should('have.attr', 'src', '/static/media/BurbleLogo.png');
    });
  
  
  
}); 