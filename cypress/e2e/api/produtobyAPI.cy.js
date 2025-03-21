/// <reference types="cypress" />
import {usuario}  from '../../fixtures/e2e/credenciais.json'
describe('Testes de API - Deletar Produto', () => {
  let token;
  let produtoId;

  it('Realizar o login e não obter um token', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login', 
      body: {
        email: usuario.email,
        password: usuario.senha
      }
    }).then((loginResponse) => {
      
      expect(loginResponse.status).to.eq(200); 
      expect(loginResponse.body).to.not.have.property('token'); 

      
      token = loginResponse.body.token;
      expect(token).to.be.undefined; 
     
    });
  });

  it('Deletar produto com token inválido', () => {
    const invalidToken = 'invalid_token_example'; 
   
    cy.request({
      method: 'DELETE',
      url: `https://serverest.dev/produtos/${produtoId}`,
      headers: {
        'Authorization': `Bearer ${invalidToken}` 
      },
      failOnStatusCode: false 
    }).then((response) => {
      
      expect(response.status).to.eq(401);

      
      expect(response.body.message).to.include(
        "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais"
      );
    });
  });
});

  
  