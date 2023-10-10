describe('dinamic control', () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/')
    })
  
    it('tick a checkbox', () => {
        cy.get(':nth-child(13) > a').click()
        cy.get('#checkbox > input').click()
    })

    it('remove checkboc', () => {
        cy.get(':nth-child(13) > a').click()
        cy.get('#checkbox-example > button').click()
        //cy.wait(7000)
        cy.get('#message').should('contain.text', "It's gone!")
    })

  })