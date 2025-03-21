/// <reference types="cypress" />

import loc from './locators';

Cypress.Commands.add('getEmail', () => {
    return cy.get(loc.LOGIN.EMAIL)
})
Cypress.Commands.add('setEmail', (email) => {
    cy.getEmail().clear().type(email)
})
Cypress.Commands.add('getEmailValor', () => {
    cy.getEmail().invoke('text')
})
Cypress.Commands.add('getSenha', () => {
    return cy.get(loc.LOGIN.SENHA)
})
Cypress.Commands.add('setSenha', (senha) => {
    cy.getSenha().clear().type(senha)
})
Cypress.Commands.add('getEntrarButton', () => {
    return cy.get(loc.LOGIN.ENTRAR_BUTTON)
})
Cypress.Commands.add('clickEntrarButton', () => {
    cy.getEntrarButton().click()
})
Cypress.Commands.add('getCadastreseButton', () => {
    return cy.get(loc.LOGIN.CADASTRESE)
})
Cypress.Commands.add('clickCadastreseButton', () => {
    cy.getCadastreseButton().click()
})
Cypress.Commands.add('realizarLogin', (email, senha) => {
    cy.setEmail(email)
    cy.setSenha(senha)
    cy.clickEntrarButton()
})