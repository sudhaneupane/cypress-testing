export class loginDemo{

    usernameTextBox="#username"
    passwordTextBox='#password'
    submitBtn='#submit'
    
    enterUsername(username){
        cy.get(this.usernameTextBox).type(username)
    }

    enterPassword(password){
        cy.get(this.passwordTextBox).type(password)
    }
    clickSubmit(){
        cy.get(this.submitBtn).click()
    }
}