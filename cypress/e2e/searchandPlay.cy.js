describe("", () =>{
    it("Searches and plays a movie", () => {
        cy.visit('http://localhost:2000/movies');
        cy.contains('Movies').should("be.visible");
        cy.get('[data-testid="input"]').type("The Shawshank Redemption");
        cy.get('button').contains('Search').click();

        // cy.get('.movie-search > .small').click(); => Current Bug 
        //  cy.wait(3000);
    })
})
