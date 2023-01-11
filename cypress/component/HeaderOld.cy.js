

describe('Header.cy.js', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should navigate to the correct page when a nav link is clicked', () => {
        cy.get('.header__nav a')
            .eq(0) // Home link
            .click();
        cy.location('pathname').should('eq', '/');

        cy.get('.header__nav a')
            .eq(1) // Movies link
            .click();
        cy.location('pathname').should('eq', '/movie');

        cy.get('.header__nav a')
            .eq(2) // TV Series link
            .click();
        cy.location('pathname').should('eq', '/tv');
    });

    it('should have the correct active link when on a page', () => {
        // Visit the Movies page
        cy.get('.header__nav a')
            .eq(1) // Movies link
            .click();

        cy.get('.header__nav .active')
            .should('have.text', 'Movies');

        // Visit the TV Series page
        cy.get('.header__nav a')
            .eq(2) // TV Series link
            .click();

        cy.get('.header__nav .active')
            .should('have.text', 'TV Series');
    });
});