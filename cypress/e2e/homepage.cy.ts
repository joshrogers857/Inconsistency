describe('The Homepage', () => {
  beforeEach(() => cy.visit('/'));

  it('successfully loads', () => {
  });

  it('displays navbar brand', () => {
    cy.get('.navbar-brand').should('contain.text', 'Inconsisten.cy');
  });

  it('displays a quote', () => {
    cy.get('#quote')
      .should('exist')
      .children().first().should('contain.text', 'A Quote...');
  });
});
