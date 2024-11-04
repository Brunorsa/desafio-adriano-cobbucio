/// <reference types="cypress" />
import { generateUsers } from "../support/utils";

const newUser = generateUsers();

let userNaoCdastrado;

describe('Feature 01 - Login', () => {
  before(() => {
    cy.fixture("example").then((data) => {
      userNaoCdastrado = data
    })
  })
  beforeEach(() => {
    cy.visit('/')
  })
  it('Criar um novo usuário com sucesso', () => {
    cy.createUser(newUser.nome, newUser.email, newUser.senha)
    cy.get('.alert').should('have.text', 'Usuário inserido com sucesso')
  })
  it('Validar login com e-mail não cadastrado', () => {
    cy.login(userNaoCdastrado[0].email, userNaoCdastrado[0].password)
    cy.get('.alert').should('have.text', 'Problemas com o login do usuário')
  });
  it('Validar login com e-mail cadastrado', () => {
    cy.login(newUser.email, newUser.senha)
    cy.get('.dropdown-toggle').should('exist')
    cy.get('.alert').should('have.text', `Bem vindo, ${newUser.nome}!`)
  });
})
