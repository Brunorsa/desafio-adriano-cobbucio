Cypress.Commands.add('login', (email, password) => {
  cy.get('#email').type(email) 
  cy.get('#senha').type(password) 
  cy.get('.btn').click();
})

Cypress.Commands.add('logout', () => {
  cy.get(':nth-child(5) > a')
  cy.get('.jumbotron')
})

Cypress.Commands.add('createUser', (name, email, password) => {
  cy.get(':nth-child(2) > a').click();
  cy.get('#nome').type(name)
  cy.get('#email').type(email) 
  cy.get('#senha').type(password) 
  cy.get('.btn').click();
})