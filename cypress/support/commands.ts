// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { loginPage } from "../pages/loginPage";
import { navbarPage } from "../pages/navbarPage";

// Extend Cypress Chainable interface to include the 'login' command
declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;
    }
  }
}

//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
const login = new loginPage();
const navbar = new navbarPage();

  cy.session([], () => {
    cy.visit('')
    navbar.clickOnSignIn()
    login.login('puresoul22703@gmail.com', 's6w?bV%:WMyRA4m');
  })
})