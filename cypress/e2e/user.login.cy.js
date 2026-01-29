import userData from '../fixtures/users/userdata.json'

describe('Orage HRM Tests', () => {

  const selectorsList = {
    usernameField : "[name='username']",
    passwordField : "[name='password']",
    loginButton : "[type='submit']",
    sectionTitleTopBar : ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert : "[role='alert']",
    dashboardGrid : ".orangehrm-dashboard-grid",
    MyInfoButton : "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField : "[name='firstName']",
    middleNameField : "[name='middleName']",
    lastNameField : "[name='lastName']",
    employeeIdField : ".oxd-input--active",
    otherIdField : ".oxd-input",
    driversLicenseNumberField : ".oxd-input"
  }

  it.only('User Info Update - Sucessfull', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField) .type(userData.userSucess.username)
    cy.get(selectorsList.passwordField) .type(userData.userSucess.passowrd)
    cy.get(selectorsList.loginButton) .click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.MyInfoButton) .click()
    cy.get(selectorsList.firstNameField) .clear() .type('Harry')
    cy.get(selectorsList.middleNameField) .clear() .type('James')
    cy.get(selectorsList.lastNameField) .clear() .type('Potter')
    cy.get(selectorsList.otherIdField).eq(4) .clear()  .type('testv')
    cy.get(selectorsList.driversLicenseNumberField).eq(5) .clear() .type('123456')
    
  })
  it('login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField) .type(userData.userFail.username)
    cy.get(selectorsList.passwordField) .type(userData.userFail.password)
    cy.get(selectorsList.loginButton) .click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})