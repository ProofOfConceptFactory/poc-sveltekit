describe('not found', () => {
    it('not found', () => {
        cy.visit('/not-found', {
            failOnStatusCode: false
        })

        cy.get('a').eq(0).should('contain.text', 'Home')
        cy.get('a').eq(1).should('contain.text', 'Another page')

        cy.contains('h1', '404')
        cy.get('p').eq(0).should('contain.text', 'Not Found')
    })

    it('not found - click on home link', () => {
        cy.visit('/not-found', {
            failOnStatusCode: false
        })

        cy.get('a').eq(0).click()
        cy.url().should('eq', Cypress.config().baseUrl + '/')

        cy.contains('h1', 'Hello from SvelteKit!👋')
        cy.get('h1').should('not.contain.text', 'Not Found')

        cy.get('a').first().should('contain.text', 'Home')
        cy.get('a').last().should('contain.text', 'Another page')
    })

    it('not found - click on another page link', () => {
        cy.visit('/not-found', {
            failOnStatusCode: false
        })

        cy.get('a').eq(1).click()
        cy.url().should('eq', Cypress.config().baseUrl + '/another-page')

        cy.contains('h1', 'Another page')
        cy.get('h1').should('not.contain.text', 'Hello from SvelteKit!👋')

        cy.get('a').first().should('contain.text', 'Home')
        cy.get('a').last().should('contain.text', 'Another page')
    })
})
