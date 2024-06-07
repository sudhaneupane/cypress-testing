import { loginPage } from "./pages/login_page";

const LoginPage = new loginPage();

beforeEach(()=>{
    cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
})

describe("All login test", () => {

    

  it("login with correct credentials", () => {
   

    LoginPage.enterUserName("Admin");
    LoginPage.enterPassword("admin123");
    LoginPage.clickLogin();

    cy.get('.oxd-chart-legend > :nth-child(5) > .oxd-text').click()
  });

  it("Skip the test", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    LoginPage.enterUserName("Admin");
    LoginPage.enterPassword("admin123");
    LoginPage.clickLogin();
  });
});
