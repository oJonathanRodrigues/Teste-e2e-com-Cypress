describe('Formulário de login',() => {
    beforeEach(() =>{
        cy.visit('http://localhost:3000/')
    })

    it('Não deve permitir um e-mail inválido', ()=>{
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('jonathan.wlr@hotmail.com')
        cy.getByData('senha-input').type('casa12345')
        cy.getByData('botao-enviar').click()
        //cy.getByData('mensagem-erro').should('exist').and('have.text','E-mail ou senha incorretos')
    })

    it.only('Não deve permitir um campo em branco',() => {
        cy.getByData('botao-login').click()
        cy.getByData('senha-input').type('casa12345')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O campo email é obrigatório')
    })
})