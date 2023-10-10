describe('dropdown list', () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/')
    })
  
    it('select option 1', () => {
        cy.get(':nth-child(11) > a').click()
        cy.get('#dropdown').select('1').should('have.value', '1')
    })

    it('select option 2', () => {
        cy.get(':nth-child(11) > a').click()
        cy.get('#dropdown').select('2').should('have.value', '2')
    })


  })