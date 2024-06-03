describe("assertion test", function () {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
    cy.get(
      ":nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)"
    ).click();
    cy.get("#query-btn")
      .should("contain", "Button")
      .should("have.class", "query-btn")
      .should("be.visible")
      //   .should('be.disabled')
      .should("be.enabled");
  });
});
