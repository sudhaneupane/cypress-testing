import { login } from "./pages/facebooklogin";

const Login = new login();

it("Facebook login", () => {
  cy.visit("https://www.facebook.com/");

  Login.EmailType("");
  Login.passwordType("");
  Login.loginPerform();
});
