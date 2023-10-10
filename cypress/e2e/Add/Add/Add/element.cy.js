describe('Add and remove element', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/')
  })

  it('succes add element', () => {
    cy.get('ul > :nth-child(2) > a').click()
    cy.get('button').click()
  })

  it('succes remove element', () => {
    cy.get('ul > :nth-child(2) > a').click()
    cy.get('button').click()
    cy.get('.added-manually').click()
  })

})