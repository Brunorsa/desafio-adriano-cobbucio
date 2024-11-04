Cypress.Commands.add('criarConta', (contaNome) => {
  cy.get('.dropdown-toggle').click()
  cy.get('.dropdown-menu > :nth-child(1) > a').click()
  cy.get('#nome').type(contaNome)
  cy.get('.btn').click()
})

Cypress.Commands.add('loginConta', (email, password) => {
  cy.session('login', () => {
    cy.visit('/')
    cy.get('#email').type(email)
    cy.get('#senha').type(password)
    cy.get('.btn').click();
  })
})

Cypress.Commands.add('exibirAlerta', () => {
  cy.get('.alert')
})

Cypress.Commands.add('listarContas', () => {
  cy.get('.dropdown-toggle').click();
  cy.get('.dropdown-menu > :nth-child(2) > a').click();
})

Cypress.Commands.add('alterarNomeContas', (contaNome) => {
  cy.get('.glyphicon-edit').then(($links) => {
    const totalLinks = $links.length;

    for (let i = 0; i < totalLinks; i++) {
      const numeroAleatorio = Math.floor(Math.random() * 1000) + 1;

      cy.get('.glyphicon-edit').eq(i).click();
      cy.get('#nome').clear().type(`${contaNome} atualizado ${numeroAleatorio}`);
      cy.get('.btn').click();
    }
  });
});

Cypress.Commands.add('excluirContas', () => {
  cy.get('.glyphicon-remove-circle').then(($links) => {
    const totalLinks = $links.length;

    for (let i = 0; i < totalLinks; i++) {
      cy.get('.glyphicon-remove-circle').eq(0).click();
    }
  });
})

