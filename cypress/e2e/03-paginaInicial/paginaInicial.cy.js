/// <reference types="cypress" />
import { usuario } from '../../fixtures/e2e/credenciais.json'


describe('Teste Navegar Pagina Inicial', () => {
    before(() => {

    })
    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login')
        cy.realizarLogin(usuario.email, usuario.senha)
    })

    it('Deve validar a tela de Cadastrar Produtos', () => {
        cy.validarCadastrarProdutosScreen();
    });

    it('Deve validar a tela de Cadastrar Usuários', () => {
        cy.validarCadastrarUsuariosScreen();
    });

    it('Deve validar a tela de Listar Produtos', () => {
        cy.validarListarProdutosScreen();
    });

    it('Deve validar a tela de Listar Usuários', () => {
        cy.validarListarUsuariosScreen();
    });

    it('Deve validar a tela de Relatórios', () => {
        cy.validarRelatoriosScreen();
    });
});