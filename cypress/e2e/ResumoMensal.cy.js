/// <reference types="cypress" />
import { generateUsers, generateDate, getMesAtual, getAnoAtual } from "../support/utils";

const dataAtual = generateDate();

let userPadrao;

describe('Feature 04 - Resumo mensal', () => {
  before(() => {
    cy.fixture("example").then((data) => {
      userPadrao = data
    })
  })
  beforeEach(() => {
    cy.loginConta(userPadrao[1].email, userPadrao[1].password)
  })
  it('Filtrar resumo mensal', () => {
    const newConta = generateUsers();
    const mesAtual = getMesAtual();
    const anoAtual = getAnoAtual();

    cy.visit('/')
    cy.criarConta(newConta.conta);
    cy.criarMovimentacao('Receita', dataAtual, dataAtual, newConta.nome, '250')
    cy.get('.btn').click();
    cy.filtrarResumos(mesAtual, anoAtual)

  })
  it('Excluir movimentações', () => {
    cy.visit('/extrato')
    cy.excluirMovimentacoes()
    cy.exibirAlerta().should('have.text', 'Movimentação removida com sucesso!')
  })
})