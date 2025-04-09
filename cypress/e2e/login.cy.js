describe('Login', () => {
  const username = 'admin'
  const password = 'admin'
  it('login success', () => {
    cy.visit('/')
    cy.get('[data-cy="username"]').type(username)
    cy.get('[data-cy="password"]').type(`${password}{enter}`)
  })
})
