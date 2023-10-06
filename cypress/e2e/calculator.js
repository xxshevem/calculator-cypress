/// <reference types="cypress" />



describe('Conversion Calculator', () => {
    
    beforeEach('Open website', () => {
        console.log("Opening the website")
        cy.visit('/')

    })

    it('TC1', () => {
        //Select current unit in the left column for length
        cy.get('[name="calFrom"]').select('Meter')
            
        //Select the desired unit to convert the length to 
        cy.get('[name="calTo"]').select('Centimeter')
       
        //Enter a value to generate the resulting conversion
        cy.get('[name="fromVal"]').type('10')

        //Check the result
        cy.get('#fcresult')
            .should('contain', ' 10 Meter = 1000 Centimeter')

    })

    it('TC2', () => {

        cy.get('#topmenu')
            .get('li')
            .contains('Temperature')
            .click()

        //Enter a value to generate the resulting conversion
        cy.get('[name="fromVal"]').type('!"№%:,.;()_)(;.')

        //Check the message
        cy.get('#fcresult')
            .should('contain', 'Please provide a valid number!')

        
    })


})
