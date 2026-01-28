import userData from '../fixtures/userdata.json'

describe('Orage HRM Tests', () => {

  const selectorsList = {
    usernameField : "[name='username']",
    passwordField : "[name='password']",
    loginButton : "[type='submit']",
    sectionTitleTopBar : ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert : "[role='alert']",
    dashboardGrid : ".orangehrm-dashboard-grid"
  }


  it('login - Sucessfull', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField) .type(userData.userSucess.username)
    cy.get(selectorsList.passwordField) .type(userData.userSucess.passowrd)
    cy.get(selectorsList.loginButton) .click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })
  it('login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField) .type(userData.userFail.username)
    cy.get(selectorsList.passwordField) .type(userData.userFail.password)
    cy.get(selectorsList.loginButton) .click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})