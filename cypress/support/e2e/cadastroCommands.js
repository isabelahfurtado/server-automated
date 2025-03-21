/// <reference types="cypress" />

import loc from './locators';

Cypress.Commands.add('getNomeCadastro', () => {
    return cy.get(loc.CADASTRO_LOGIN.NOME)
})
Cypress.Commands.add('setNome', (nome) => {
    cy.getNomeCadastro().clear().type(nome)
})
Cypress.Commands.add('getNomeValor', () => {
    cy.getNomeCadastro().invoke('text')
})
Cypress.Commands.add('getEmailCadastro', () => {
    return cy.get(loc.CADASTRO_LOGIN.EMAIL1)
})
Cypress.Commands.add('setEmailCadastro', (email) => {
    cy.getEmailCadastro().clear().type(email)
})
Cypress.Commands.add('getEmailCadastroValor', () => {
    cy.getEmailCadastro().invoke('text')
})
Cypress.Commands.add('getSenhaCadastro', () => {
    return cy.get(loc.CADASTRO_LOGIN.SENHA1)
})
Cypress.Commands.add('setSenhaCadastro', (senha) => {
    cy.getSenhaCadastro().clear().type(senha)
})
Cypress.Commands.add('getCadastrarButton', () => {
    return cy.get(loc.CADASTRO_LOGIN.CADASTRAR)
})
Cypress.Commands.add('clickCadastrarButton', () => {
    cy.getCadastrarButton().click()
})

Cypress.Commands.add('cadastrarUsuario', (nome,email,senha) => {
    cy.setNome(nome)
    cy.setEmailCadastro(email)
    cy.setSenhaCadastro(senha)
    cy.clickCadastrarButton()
})