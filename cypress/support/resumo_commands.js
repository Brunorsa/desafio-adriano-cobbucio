Cypress.Commands.add('filtrarResumos', (mes, ano) => {
  cy.get(':nth-child(4) > a').click()
  cy.get('#mes').select(mes)
  cy.get('#ano').select(ano)
  cy.get('.btn').click()
})

Cypress.Commands.add('excluirMovimentacoes', () => {
  cy.get('.glyphicon-remove-circle').then((movimentacao) => {
    const totalMovimentacao = movimentacao.length;

    for (let i = 0; i < totalMovimentacao; i++) {
      cy.get('.glyphicon-remove-circle').eq(0).click();
    }
  });
})

