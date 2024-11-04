Cypress.Commands.add('criarMovimentacao', (tipoMovimentacao, dataTransacao, dataPagamento, nomeInteressado, nro) => {
  cy.get(':nth-child(3) > a').click()
  cy.get('#tipo').select(tipoMovimentacao)
  cy.get('#data_transacao').type(dataTransacao)
  cy.get('#data_pagamento').type(dataPagamento)
  cy.get('#descricao').type('teste teste')
  cy.get('#interessado').type(nomeInteressado)
  cy.get('#valor').type(nro)
})



