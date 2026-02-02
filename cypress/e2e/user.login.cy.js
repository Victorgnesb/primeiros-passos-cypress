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

  it('User Info Update - Sucessfull', () => {
    loginPage.accessLoginPage() 
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.passowrd)
    dashboardPage.checkDashboardPage()
    menuPage.acessMyInfo() 
    myInfoPage.fillPersonalDetails('Henrique', 'Manieri', 'Claro')
    myInfoPage.fillEmployeeDetails('666666', '777777', '999999', '2025-01-31')
    myInfoPage.fillStatus('b', 'M', '2026-01-01')
    myInfoPage.fillCustomField ('O', 'Finalizado')
    myInfoPage.saveForm ()    
    
       
  })
  
  it.only('login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.loginError()

    // cy.visit('/auth/login')
    // cy.get(selectorsList.usernameField) .type(userData.userFail.username)
    // cy.get(selectorsList.passwordField) .type(userData.userFail.password)
    // cy.get(selectorsList.loginButton) .click()
    // cy.get(selectorsList.wrongCredentialAlert)
  })
})