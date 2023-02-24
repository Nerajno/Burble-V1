import React from 'react';
import HeroSlide from './HeroSlide';

describe('<HeroSlide />', () => {
    it('renders the hero slide', () => {
        cy.mount(<HeroSlide />);
        cy.get(".hero-slide__item").should('exist');
    });
    // it('renders the hero slide image', () => {
    //     cy.mount(<HeroSlide />);
    //     cy.get('[data-testid="hero-slide-image"]').should('exist');
    // });
    // it('renders the hero slide title', () => {
    //     cy.mount(<HeroSlide />);
    //     cy.get('[data-testid="hero-slide-title"]').should('exist');
    // });
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
