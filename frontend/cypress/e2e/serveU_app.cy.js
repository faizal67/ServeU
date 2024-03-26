describe('ServeU app', function() {

  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Welcome')
    // cy.contains('Note app, Department of Computer Science, University of Helsinki 2023')
  })

  it('login form can be opened', function() {
    cy.contains('Login').click()
  })

  it('user can login', function () {
    cy.contains('Login').click()
    cy.get('input:first').type('faizalmohammad67@gmail.com')
    cy.get('input:last').type('123')
    cy.get('#loginbtn').click()
    cy.contains('welcome')
  }) 
  it('user can register', function () {
    cy.contains('Register').click()
    cy.get('#email').type('abc@kiet.com')
    cy.get('#password').type('123')
    cy.get('#confirmPassword').type('123')
    cy.get('#registerbtn').click()
    cy.contains('Log in')
  }) 

  

})