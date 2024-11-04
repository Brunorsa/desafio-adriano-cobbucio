/// <reference types="cypress" />
import { generateUsers } from "../support/utils";

const newUser = generateUsers();

let userNaoCdastrado;

describe('Feature 05 - Logout', () => {
  before(() => {
    cy.fixture("example").then((data) => {
      userNaoCdastrado = data
    })
  })
  it('Validar logout do sistema', () => {
    cy.visit('/');
    cy.login(userNaoCdastrado[1].email, userNaoCdastrado[1].password);
    cy.logout();
  })
})
