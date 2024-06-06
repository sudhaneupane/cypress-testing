
export class login{

    emailEnter='[data-testid="royal_email"]'
    enterPassword='[data-testid="royal_pass"]'
    clickLogin='[data-testid="royal_login_button"]'

    EmailType(email){
        cy.get(this.emailEnter).type(email)
    }

    passwordType(password){
        cy.get(this.enterPassword).type(password)
    }

    loginPerform(){
        cy.get(this.clickLogin).click()
    }

}