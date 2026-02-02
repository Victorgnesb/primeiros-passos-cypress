class LoginPage {

    selectorsList() {
        const selectors = {
            usernameField : "[name='username']",
            passwordField : "[name='password']",
            loginButton : "[type='submit']",
            wrongCredentialAlert : "[role='alert']",
            loginError : ".oxd-alert"

        }
        
        return selectors
    }    
    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList() .usernameField) .type(username)
        cy.get(this.selectorsList() .passwordField) .type(password) 
        cy.get(this.selectorsList() .loginButton) .click()

    }

    loginError(){
        cy.get(this.selectorsList() .loginError) .should('be.visible')
    }
    
}

export default LoginPage