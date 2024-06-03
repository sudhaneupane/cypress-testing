/*
  In implicit assert we use should() & and()

  In explicit assert we use expect() and assert()
*/



describe("assertion test", function () {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
    cy.get(
      ":nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)"
    ).click();
    cy.get("#query-btn")
      .should("contain", "Button")
      .and("have.class", "query-btn")
      .and("be.visible")
      //   .should('be.disabled')
      .and("be.enabled");

    expect(true).to.be.true;

    assert.equal(4,'4',' equal')
    // assert.strictEqual(4,'4','not equal')
  });
});
