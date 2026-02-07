import userData from '../fixtures/users/userdata.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require ('chance')

const chance = new Chance()
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

    myInfoPage.fillPersonalDetails(chance.first(), chance.word(), chance.last())
    myInfoPage.fillEmployeeDetails('666666', '777777', '999999', chance.date({string: true, american: false}))
    myInfoPage.fillStatus('b', 'M', '2026-01-01')
    myInfoPage.fillCustomField ('O', 'Finalizado')
    myInfoPage.saveForm ()    
    
       
  })
  
})