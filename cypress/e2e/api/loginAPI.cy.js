/// <reference types="cypress" />
import { usuario } from '../../fixtures/e2e/credenciais.json'

describe('Login via API', () => {
    it('Fazendo Login via API', () => {
        const user = {
            email: usuario.email,
            password: usuario.senha
        };
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/login',
            body: user
        }).then((response) => {

            expect(response.status).to.eq(200);

            expect(response.body.message).to.include(
                "Login realizado com sucesso"
            );
        });
    });
});
describe('Login via sem sucesso', () => {

    it('Fazendo Login via API sem sucesso', () => {
        const user2 = {
            email: "asdadsd@dasdasd.com",
            password: "hdjdsi01AS"
        };
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/login',
            body: user2,
            failOnStatusCode: false
        }).then((response) => {
            
            expect(response.status).to.eq(401);
            expect(response.body.message).to.include(
                "Email e/ou senha inválidos"
            );


        })
    })
})

