import React from "react";
import Header from "./Header";

// describe("<Header />", () => {
//   it("should render the header", () => {
//     cy.mount(<Header />);
//     cy.get('header').should('not.have.class', 'header');
//   });
  // it('should add the "shrink" class to the header on scroll', () => {
  //   cy.get('.header').should('not.have.class', 'shrink');
  //   cy.get('body').scrollTo('top');
  //   cy.get('.header').should('have.class', 'shrink');
  // });
// });

// });

// Test conditions
// Header
// - has all expected links.
// - they are real links with <a> tags.
// - should have a logo image with alt text.


describe('Header Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays all expected links', () => {
    const headerNav = [
      { 
          display: 'Home',
          path: '/'
      },
      {
          display: 'Movies',
          path: '/movie'
      }, 
      {
          display: 'TV Series',
          path: '/tv'
      }
    ];

    cy.get('.header__nav')
      .find('li')
      .each(($el, index) => {
        cy.wrap($el)
          .should('contain', headerNav[index].display)
          .find('a')
          .should('have.attr', 'href', headerNav[index].path);
      });
  });

  it('links are real links with <a> tags', () => {
    cy.get('.header__nav')
      .find('li')
      .each(($el) => {
        cy.wrap($el)
          .find('a')
          .should('have.prop', 'tagName', 'A');
      });
  });

  it('has a logo image with alt text', () => {
    cy.get('.logo')
      .find('img')
      .should('have.attr', 'alt');
  });
});
