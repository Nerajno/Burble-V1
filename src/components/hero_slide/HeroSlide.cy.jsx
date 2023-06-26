import React from 'react';
import HeroSlide from './HeroSlide';

describe('<HeroSlide />', () => {
    it('renders the hero slide', () => {
        cy.mount(<HeroSlide />);
        cy.get(".hero-slide").should('exist');
    });
    it('renders hero slide with a title and paragraph ', () => {
        cy.mount(<HeroSlide />);
        cy.get(".title").should('exist'); 
        cy.get(".overview").should('exist');
    });
    // it('renders watch now button that works', () => {
    //     cy.mount(<HeroSlide />);
    //     cy.get(".btn").contains('Watch Now').should('exist');
    //  });

    //TODO: Fix this test

    // it('renders the hero slide subtitle', () => {
    //     cy.mount(<HeroSlide />);
    //     cy.get('[data-testid="hero-slide-subtitle"]').should('exist');
    // });
    // it('renders the hero slide button', () => {
    //     cy.mount(<HeroSlide />);
    //     cy.get('[data-testid="hero-slide-button"]').should('exist');
    // });
});

// Test Summary
// Hero
// should have title and paragraph
// watch now button should work
// watch trailer button should work
