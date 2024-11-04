/// <reference types="cypress" />
import { generateUsers, generateDate } from "../support/utils";

const dataAtual = generateDate();

let userPadrao;

describe('Feature 03 - Movimentação', () => {
  before(() => {
    cy.fixture("example").then((data) => {
      userPadrao = data
    })
  })
  beforeEach(() => {
    cy.loginConta(userPadrao[1].email, userPadrao[1].password)
  })
  it('Criar movimentação do tipo Receita', () => {
    const newConta = generateUsers();

    cy.visit('/')
    cy.criarConta(newConta.conta);
    cy.criarMovimentacao('Receita', dataAtual, dataAtual, newConta.nome, '250')
    cy.get('#tipo').should('have.value', 'REC')
    cy.get('.btn').click();
    cy.exibirAlerta().should('have.text', 'Movimentação adicionada com sucesso!')
  })
  it('Criar movimentação do tipo Despesa', () => {
    const newConta = generateUsers();

    cy.visit('/')
    cy.criarMovimentacao('Despesa', dataAtual, dataAtual, newConta.nome, '250')
    cy.get('#tipo').should('have.value', 'DESP')
    cy.get('.btn').click();
    cy.exibirAlerta().should('have.text', 'Movimentação adicionada com sucesso!')
  })
  it('Validar formato inválido da data', () => {
    const newConta = generateUsers();

    cy.visit('/')
    cy.criarMovimentacao('Despesa', dataAtual, dataAtual + 1, newConta.nome, '250')
    cy.get('.btn').click();
    cy.get('.alert > ul > li').should('have.text', 'Data do pagamento inválida (DD/MM/YYYY)')
  })
  it('Validar campo Valor como inválido', () => {
    const newConta = generateUsers();

    cy.visit('/')
    cy.criarMovimentacao('Despesa', dataAtual, dataAtual, newConta.nome, 'ABC')
    cy.get('.btn').click();
    cy.get('.alert > ul > li').should('have.text', 'Valor deve ser um número')
  })

})