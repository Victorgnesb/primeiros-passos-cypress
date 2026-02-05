import userData from '../fixtures/users/userdata.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()

describe('Login Orange HRM Tests', () => {

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.loginError()
    
  })

    it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.passowrd)
    
    
  })
})