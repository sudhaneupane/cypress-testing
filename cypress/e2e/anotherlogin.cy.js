import { loginDemo } from "./pages/login";

const Logindemo=new loginDemo
it("practice login test automation",()=>{
    cy.visit("https://practicetestautomation.com/practice-test-login/")

    Logindemo.enterUsername('student')
    Logindemo.enterPassword('Password123')
    Logindemo.clickSubmit()

})