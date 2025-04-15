describe('Login', () => {
  const username = 'admin'
  const password = 'admin'
  it('login success', () => {
    cy.visit('/')
    cy.get('.subheader__item--loginLink').click()
    cy.get('[data-cy="username"]').type(username)
    cy.get('[data-cy="password"]').type(`${password}{enter}`)
    cy.get('[data-cy="posts"]').click()
    cy.url().should('include', '/posts')
  })
})
