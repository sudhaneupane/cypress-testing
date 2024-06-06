export class loginPage{

    usernameTextbox=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    passwordTextbox=':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginButton='.oxd-button'

    enterUserName(username){
        cy.get(this.usernameTextbox).type(username)
    }

    enterPassword(password){
        cy.get(this.passwordTextbox).type(password)
    }

    clickLogin(){
        cy.get(this.loginButton).click()
    }
}