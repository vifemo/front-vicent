describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('.search-container').type('qui')
    cy.get('.search-container__item').first().click()
  })
})
