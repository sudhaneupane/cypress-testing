import {loginPage} from './pages/login_page'

const LoginPage=new loginPage()

it("POM Demo",()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    LoginPage.enterUserName('Admin')
    LoginPage.enterPassword('admin123')
    LoginPage.clickLogin()
})

