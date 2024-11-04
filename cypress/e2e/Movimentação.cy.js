/// <reference types="cypress" />
import { generateUsers, generateDate } from "../support/utils";

const newConta = generateUsers();
const dataAtual = generateDate();

let userNaoCdastrado;

describe('Feature 03 - Movimentação', () => {
  before(() => {
    cy.fixture("example").then((data) => {
      userNaoCdastrado = data
    })
  })
  beforeEach(() => {
    cy.loginConta(userNaoCdastrado[1].email, userNaoCdastrado[1].password)
    
  })
  it('Criar movimentação do tipo Receita', () => {
    cy.visit('/')
    cy.criarConta(newConta.conta);
    cy.criarMovimentacao('REC', dataAtual, dataAtual)
  })
})