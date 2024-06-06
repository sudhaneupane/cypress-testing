import {loginPage} from './pages/login_page'

const LoginPage=new loginPage()

it("login test 1",()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    LoginPage.enterUserName('Admin')
    LoginPage.enterPassword('admin123')
    LoginPage.clickLogin()
})

it("login test 2",()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    LoginPage.enterUserName('Admin')
    LoginPage.enterPassword('admin123')
    LoginPage.clickLogin()
})