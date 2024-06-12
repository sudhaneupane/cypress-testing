describe("Backend Data Retrieval", () => {
  it("should retrieve data from the backend", () => {
    cy.request(
      "GET",
      "https://www.allthingsdev.co/?gad_source=1&gclid=CjwKCAjwyJqzBhBaEiwAWDRJVIiPbr2kOzA-N-pAmpzufqgnSMhixZGNc5vxL9fUpHXykH3e6U7ppRoCxUkQAvD_BwE"
    ).then((response) => {
      expect(response.status).to.eq(200);

      const data = response.body;
      // expect(data).to.have.property('class');
      // expect(data).to.have.property('name');
    });
  });
});

describe("Form Submission with Backend Data", () => {
  it("should fill and submit the form with data from the backend", () => {
    cy.visit("https://www.allthingsdev.co/login");

    cy.get(".sc-ikkyvV").click();

    cy.visit("https://www.allthingsdev.co/signup");
    cy.get(".sc-ecPDsT").type("sudaneupane.11@gmail.com");
    cy.get(":nth-child(2) > .sc-gdyfxU").type("Sudha123@");
    cy.get(".sc-gfopwy > .sc-gdyfxU").type("Sudha123@");
    cy.get(".sc-dBmyGf").click();
    cy.get(".sc-cVzzKN").click();
    cy.get('[style="display: flex; gap: 20px;"] > :nth-child(2)').click()

  });
});


describe("Login with correct credentials", () => {
  it("Email and Password entered", () => {
    cy.visit("https://www.allthingsdev.co/login");
    
    cy.get('input[name="email"]').type("sudaneupane.11@gmail.com");
    cy.get(".sc-aYaIB > .sc-eDPFhE").type("Sudha123@");

    cy.get(".sc-kAycRU").click();

    // Submit the form
    cy.get(".sc-bXCLgj").click();
  })
})


// describe("Authenticated Backend Data Retrieval", () => {
//   it("should retrieve data from the authenticated backend", () => {
//     const token = "your-auth-token"; // Replace with actual token

//     cy.request({
//       method: "GET",
//       url: "https://api.example.com/data",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//       const data = response.body;
//       // Further assertions
//     });
//   });
// });
