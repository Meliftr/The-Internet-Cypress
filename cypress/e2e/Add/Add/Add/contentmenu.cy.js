describe('content menu', () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/')
    })
  
    it('content menu', () => {
        cy.get(':nth-child(7) > a').click()
        cy.get('#hot-spot').rightclick()
    })

  })