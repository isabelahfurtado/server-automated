/// <reference types="cypress" />
//import {usuario}  from '../../fixtures/e2e/credenciais.json'

describe('Testes de API - Usuários', () => {
  it('Deve retornar a lista de usuários', () => {
    cy.request('GET', 'https://serverest.dev/usuarios')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('usuarios').that.is.an('array');
        expect(response.body.usuarios.length).to.be.greaterThan(0);
      });
  });
  
});
