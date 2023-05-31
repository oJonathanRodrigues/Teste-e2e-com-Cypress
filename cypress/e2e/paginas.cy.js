describe('Testando multiplas páginas',() => {
    it('Deve conseguir acessar a página de cartões', {browser:'edge'}, () =>{
        cy.visit('/')
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('jonathan.wlr@hotmail.com')
        cy.getByData('senha-input').type('casa123')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq','/home')

        cy.getByData('app-home').find('a').eq(1).click()
        cy.getByData('titulo-cartoes').should('exist').and('have.text', 'Meus cartões')

        cy.location('pathname').should('eq','/home/cartoes')
    })
})