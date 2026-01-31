import userData from '../fixtures/users/userdata.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orage HRM Tests', () => {

  const selectorsList = {
    firstNameField : "[name='firstName']",
    middleNameField : "[name='middleName']",
    lastNameField : "[name='lastName']",
    genericField : ".oxd-input",
    gerericDateField : ".oxd-date-input",
    genericIndexField : "[tabindex='0']",
    dateCloseButton : ".--close",
    testField : "[options='']",
    comboBox : ".oxd-select-text--arrow",
    submitButton : "[type='submit']",
    bloodButtom : "[tabindex='0']"

  }

  it.only('User Info Update - Sucessfull', () => {
    loginPage.accessLoginPage() 
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.passowrd)
    dashboardPage.checkDashboardPage()
    menuPage.acessMyInfo() 
    cy.get(selectorsList.firstNameField) .should('be.visible') .clear() .type('Henrique')
    cy.get(selectorsList.middleNameField) .clear() .type('Manieri')
    cy.get(selectorsList.lastNameField) .clear() .type('Claro')
    cy.get(selectorsList.genericField).eq(4) .clear()  .type('Many')
    cy.get(selectorsList.genericField).eq(5) .clear() .type('123456')
    cy.get(selectorsList.gerericDateField) .eq(0) .clear() .type('2024-10-10')
    cy.get(selectorsList.dateCloseButton) .click()
    cy.get(selectorsList.genericField).eq(9) .clear() .type('654321')
    cy.get(selectorsList.comboBox) .eq(0) .click()
    cy.get('.oxd-select-dropdown > :nth-child(9)') .click() 
    cy.get(selectorsList.comboBox).eq(1) .click()
    cy.get('.oxd-select-dropdown > :nth-child(4)') .click() 
    cy.get(selectorsList.genericIndexField).eq(0) .type('A')
    cy.get(selectorsList.genericIndexField).eq(1) .type('A')
    cy.get(selectorsList.gerericDateField).eq(1) .clear() .type('1993-10-12')
    cy.get(selectorsList.dateCloseButton) .click()
    cy.get(selectorsList.submitButton).eq(0) .click({force: true})
    cy.get('body') .should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')   
    cy.get(selectorsList.comboBox).eq(2) .click()
    cy.get('.oxd-select-dropdown > :nth-child(8)') .click() 
    cy.get(selectorsList.testField) .clear() .type('Teste1')

    
       
  })
  it('login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField) .type(userData.userFail.username)
    cy.get(selectorsList.passwordField) .type(userData.userFail.password)
    cy.get(selectorsList.loginButton) .click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})