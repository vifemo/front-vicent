describe('template spec', () => {
  it('Theme has been changed', () => {
    cy.visit('/')

    cy.get('.header')
      .invoke('css', 'background-color')
      .then((initialColor) => {
        cy.get('.subheader__item--theme').first().click()

        cy.get('.header')
          .should('have.css', 'background-color')
          .and('not.eq', initialColor)
      })
  })
})
