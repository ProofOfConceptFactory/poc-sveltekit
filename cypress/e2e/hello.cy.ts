describe('hello from sveltekit', () => {
    it('check h1 contains Hello from SvelteKit', () => {
        cy.visit('/')

        cy.get('a').first().should('contain.text', 'Home')
        cy.get('a').last().should('contain.text', 'Another page')

        cy.contains('h1', 'Hello from SvelteKit!👋')
    })

    it('hello from sveltekit - click on another page link', () => {
        cy.visit('/')

        cy.get('a').eq(1).click()
        cy.url().should('eq', Cypress.config().baseUrl + '/another-page')

        cy.get('a').first().should('contain.text', 'Home')
        cy.get('a').last().should('contain.text', 'Another page')

        cy.get('h1').should('not.contain.text', 'Hello from SvelteKit!👋')
        cy.contains('h1', 'Another page')
    })
})
