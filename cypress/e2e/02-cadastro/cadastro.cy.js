/// <reference types="cypress" />
import {cadastro}  from '../../fixtures/e2e/credenciais.json'
const commands = require('../../support/commands')

let nome;
let email;
let senha;

describe('Teste E2E - Cadastro pela tela de Login Frontend', () => {
    before(() => {
 
    })
    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login')
        cy.clickCadastreseButton()
    })

    it('Cadastro com usuario já cadastrado', () => {
       

        cy.cadastrarUsuario(cadastro.nome, cadastro.email, cadastro.password)
        cy.get('.alert > :nth-child(2)').should('be.visible')

    });
    it('Cadastro com  usuario não já cadastrado', () => {
        const nome = commands.gerarTextoAleatorio()
        const email = commands.gerarEmailValido()
        const senha = commands.gerarSenhaValida()
       

        cy.cadastrarUsuario(nome, email, senha)

        cy.get('#navbarTogglerDemo01 > .imagem').should('be.visible')

     

    });

});