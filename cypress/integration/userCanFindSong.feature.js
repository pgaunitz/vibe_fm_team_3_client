describe("user can search for song", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("retrieves song from API", () => {
    // cy.get("select#selectmethod").select("track");
    cy.get("input#tracks").type('Vertigo');
    cy.get("button#search").click();
    cy.get("#tracks").should(
      "contain",
      "Vertigo"
    );
  });
});
