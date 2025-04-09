describe('Edit post', () => {
  const username = 'admin'
  const password = 'admin'
  before(() => {
    cy.visit('/login')
    cy.get('[data-cy="username"]').type(username)
    cy.get('[data-cy="password"]').type(`${password}{enter}`)
  })
  it('Edit first post in the posts page', () => {
    cy.get('[data-cy="posts"]').click()
    cy.get('.postcard__link').first().click()
    cy.get('.button').eq(1).click()
    cy.get('#title').click().clear()
    cy.get('#title').click().type('Post Edited')
  })
})
