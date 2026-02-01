import userData from '../fixtures/users/userdata.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orage HRM Tests', () => {

  const selectorsList = {


  }

  it.only('User Info Update - Sucessfull', () => {
    loginPage.accessLoginPage() 
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.passowrd)
    dashboardPage.checkDashboardPage()
    menuPage.acessMyInfo() 
    myInfoPage.fillPersonalDetails('Henrique', 'Manieri', 'Claro')
    myInfoPage.fillEmployeeDetails('666666', '777777', '999999', '2025-01-31')
    myInfoPage.fillStatus('b', 'M', '2026-01-01')
    myInfoPage.fillCustomField ('O', 'Finalizado')
    myInfoPage.saveForm ()    
    //myInfoPage.saveForm()
    

      // cy.get(selectorsList.genericField).eq(9) .clear() .type('654321')
      // cy.get(selectorsList.comboBox) .eq(0) .click()
      // cy.get('.oxd-select-dropdown > :nth-child(9)') .click() 
      // cy.get(selectorsList.comboBox).eq(1) .click()
      // cy.get('.oxd-select-dropdown > :nth-child(4)') .click() 
      // cy.get(selectorsList.submitButton).eq(0) .click({force: true})
      // cy.get('body') .should('contain', 'Successfully Updated')
      // cy.get('.oxd-toast-close')   
      // cy.get(selectorsList.comboBox).eq(2) .click()
      // cy.get('.oxd-select-dropdown > :nth-child(8)') .click() 
      // cy.get(selectorsList.testField) .clear() .type('Teste1')

    
       
  })
  it('login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField) .type(userData.userFail.username)
    cy.get(selectorsList.passwordField) .type(userData.userFail.password)
    cy.get(selectorsList.loginButton) .click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})