Cypress.Commands.add('criarMovimentacao', (tipoMovimentacao, dataTransacao, dataPagamento) => {
  cy.get(':nth-child(3) > a').click()
  cy.get('#tipo').select(tipoMovimentacao)
  cy.get('#data_transacao').type(dataTransacao)
  cy.get('#data_pagamento').type(dataPagamento)
  cy.get('#interessado').type('Antonio')
  cy.get('#descricao').type('teste teste')
  cy.get('#valor').type('250')
  cy.get('.btn').click();
})

