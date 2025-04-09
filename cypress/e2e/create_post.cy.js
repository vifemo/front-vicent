describe('Create post', () => {
  const username = 'admin'
  const password = 'admin'
  before(() => {
    cy.visit('/login')
    cy.get('[data-cy="username"]').type(username)
    cy.get('[data-cy="password"]').type(`${password}{enter}`)
  })
  it('Post has been created', () => {
    cy.get('[data-cy="create"]').click()
    cy.get('#title').click().type('Create new test post title')
    cy.get('#content').click().type('Create new test post body')
    cy.get('.form-container__button').click()
  })
})
