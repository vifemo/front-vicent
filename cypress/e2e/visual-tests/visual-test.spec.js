describe('Testing img', () => {
  it('should match the screenshot of the subheader', () => {
    cy.visit('/login')
    cy.get('.subheader').matchImageSnapshot()
  })
})
