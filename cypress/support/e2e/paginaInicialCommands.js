
/// <reference types="cypress" />

import loc from './locators';

Cypress.Commands.add('validarCadastrarProdutosScreen', () => {
    cy.get(loc.PAGINA_INCIAL.CADASTRARPRODUTOS).click()
    cy.url().should('eq', 'https://front.serverest.dev/admin/cadastrarprodutos');
})
Cypress.Commands.add('validarCadastrarUsuariosScreen', () => {
    cy.get(loc.PAGINA_INCIAL.CADASTRARUSUARIOS).click()
    cy.url().should('eq', 'https://front.serverest.dev/admin/cadastrarusuarios');
})
Cypress.Commands.add('validarListarProdutosScreen', () => {
    cy.get(loc.PAGINA_INCIAL.LISTARPRODUTOS).click()
    cy.url().should('eq', 'https://front.serverest.dev/admin/listarprodutos');
})
Cypress.Commands.add('validarListarUsuariosScreen', () => {
    cy.get(loc.PAGINA_INCIAL.LISTARUSUARIOS).click()
    cy.url().should('eq', 'https://front.serverest.dev/admin/listarusuarios');
})
Cypress.Commands.add('validarRelatoriosScreen', () => {
    cy.get(loc.PAGINA_INCIAL.RELATORIOS).click()
    cy.url().should('eq', 'https://front.serverest.dev/admin/relatorios');
})
