/// <reference types="cypress" />
import { generateUsers } from "../support/utils";

const newUser = generateUsers();

let userPadrao;

describe('Feature 05 - Logout', () => {
  before(() => {
    cy.fixture("example").then((data) => {
      userPadrao = data
    })
  })
  it('Validar logout do sistema', () => {
    cy.visit('/');
    cy.login(userPadrao[1].email, userPadrao[1].password);
    cy.logout();
    cy.get(':nth-child(2) > a').should('be.visible')
  })
})
