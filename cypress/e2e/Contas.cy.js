/// <reference types="cypress" />
import { generateUsers } from "../support/utils";



let userNaoCdastrado;

describe('Feature 02 - Contas', () => {
  before(() => {
    cy.fixture("example").then((data) => {
      userNaoCdastrado = data
    })
  })
  beforeEach(() => {
    cy.loginConta(userNaoCdastrado[1].email, userNaoCdastrado[1].password)
  })
  it('Criar adicionar 2 contas', () => {
    const newConta = generateUsers();

    cy.visit('/')
    cy.criarConta(newConta.conta);
    cy.criarConta(newConta.conta + 1);
    cy.exibirAlerta().should('have.text', 'Conta adicionada com sucesso!')
  })
  it('Listar todas as contas', () => {
    cy.visit('/')
    cy.listarContas();
    cy.get('tr:visible').should('have.length.greaterThan', 0);
  });
  it('Validar alteração do nome das contas', () => {
    const newConta = generateUsers();
    
    cy.visit('/contas');
    cy.alterarNomeContas(newConta.conta);
    cy.exibirAlerta().should('have.text', 'Conta alterada com sucesso!')
  })
  it('Validar exclusão das contas', () => {
    cy.visit('/contas');
    cy.excluirContas();
  });
})