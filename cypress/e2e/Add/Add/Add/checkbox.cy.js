describe('checkbox', () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/')
    })
  
    it('checkbox 1', () => {
        cy.get(':nth-child(6) > a').click()
        cy.get('#checkboxes > :nth-child(1)').click()
    })

    it('uncheckbox 2', () => {
        cy.get(':nth-child(6) > a').click()
        cy.get('[checked=""]').click()
    })
  

  })