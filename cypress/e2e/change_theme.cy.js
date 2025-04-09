describe('template spec', () => {
  it('Theme has been changed', () => {
    cy.visit('/')
    cy.get('.subheader__item--theme').first().click()
  })
})
