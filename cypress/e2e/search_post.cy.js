describe('SearchPost component', () => {
  it('should filter posts', () => {
    cy.visit('/')
    cy.get('.search-container').type('qui')
    cy.get('.search-container__list', { timeout: 10000 }).first().click()
  })
})
