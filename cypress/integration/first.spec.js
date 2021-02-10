/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200')
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('.type() - type into a DOM element', () => {
      // https://on.cypress.io/type
      cy.get('#email')
        .type('fake@email.com').should('have.value', 'fake@email.com')
  
        // .type() with special character sequences
        .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
        .type('{del}{selectall}{backspace}')
  
        // .type() with key modifiers
        .type('{alt}{option}') //these are equivalent
        .type('{ctrl}{control}') //these are equivalent
        .type('{meta}{command}{cmd}') //these are equivalent
        .type('{shift}')
  
        // Delay each keypress by 0.1 sec
        .type('slow.typing@email.com', { delay: 100 })
        .should('have.value', 'slow.typing@email.com')
  
      cy.get('#pass')
        // Ignore error checking prior to type
        // like whether the input is visible or disabled
        .type('12345', { delay: 100 })
        .should('have.value', '12345')
        cy.get('#sub').click() 

        cy.get('#message').contains('ok')
    })

    it('.type() - type into a DOM element', () => {
        // https://on.cypress.io/type
        cy.get('#email')
          .type('fake@email.com').should('have.value', 'fake@email.com')
    
          // .type() with special character sequences
          .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
          .type('{del}{selectall}{backspace}')
    
          // .type() with key modifiers
          .type('{alt}{option}') //these are equivalent
          .type('{ctrl}{control}') //these are equivalent
          .type('{meta}{command}{cmd}') //these are equivalent
          .type('{shift}')
    
          // Delay each keypress by 0.1 sec
          .type('slow.typingemail.com', { delay: 100 })
          .should('have.value', 'slow.typingemail.com')
    
        cy.get('#pass')
          // Ignore error checking prior to type
          // like whether the input is visible or disabled
          .type('12345', { delay: 100 })
          .should('have.value', '12345')
          cy.get('#sub').click() 
  
          cy.get('#message').contains('error')
      })

    it('.type() - type into a DOM element', () => {
          cy.get('#service-variable').contains('test')
      })
})
