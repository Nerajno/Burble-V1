describe('', () => {
  it('Searches and plays a movie', () => {
    cy.visit('http://localhost:2000/movie');
    cy.contains('Movies').should('be.visible');
    cy.get('[data-testid="input"]').type('The Shawshank Redemption');
    cy.get('button').contains('Search').click();
    cy.get('.movie-search > .small').click();
    cy.get('a > h3').contains('The Shawshank Redemption').click({
      force: true,
    });
    //cy.wait(2000);
    cy.contains('The Shawshank Redemption').should('be.visible');
    cy.contains('Cast').should('be.visible');
    cy.contains('Trailer').should('be.visible');
    cy.get(
      '.movie-content.container div.movie-content__info div.genres'
    ).should('be.visible');
    cy.get('.movie_player').should('be.visible');
  });
});

// add a cypress command that clicks on a trailer button and plays the trailer

// User visits home page,
// type in a movie title,
// finds that movie in the result set and click it,
// verify expected movie info is displayed (cast, title, buttons, trailers, tags)
