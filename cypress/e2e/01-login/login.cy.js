/// <reference types="cypress" />
import {usuario}  from '../../fixtures/e2e/credenciais.json'


describe('Teste E2E - Login Frontend', () => {
    before(() => {
 
    })
    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login')
    })

    it('Deve realizar login com sucesso e redirecionar para a página inicial', () => {
        cy.comm

        cy.realizarLogin(usuario.email, usuario.senha)
        cy.get('.lead').contains("Este é seu sistema para administrar seu ecommerce.")

    });

});
