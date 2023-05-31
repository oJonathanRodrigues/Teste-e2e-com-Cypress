describe('Testando dispositivos móveis', () => {
    it('Deve existir um botão menu burguer', () => {

        cy.visit('/')
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('jonathan.wlr@hotmail.com')
        cy.getByData('senha-input').type('casa123')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq','/home')

        cy.getByData('menu-burguer').click()

        cy.getByData('menu-lateral').find('a').eq(3).click()

        cy.location('pathname').should('eq','/home/investimentos')
    })
})