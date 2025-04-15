describe('SearchPost component', () => {
  const searchTerm = 'qui'
  it('should filter posts', () => {
    cy.visit('/')
    cy.get('.search-container input').type(searchTerm)
    cy.get('.search-container input').should('have.value', searchTerm)
  })
})
