import React from "react";
import Header from "./Header";

// Test conditions
// Header
// - has all expected links.
// - they are real links with <a> tags.
// - should have a logo image with alt text.


describe('<Header />', () => {
  it('renders', () => {
    cy.mount(<Header></Header>);
    cy.get('header').should('have.class', 'header');
  });
});
