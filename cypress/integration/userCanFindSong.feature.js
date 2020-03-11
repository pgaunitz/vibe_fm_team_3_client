describe("user can search for song", () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET', 
      url: "http://localhost:3000/api/v1/tracks**",
      response: "fixture:song_data.json"
    })
    cy.visit("/");
  });

  it("retrieves song from API", () => {
    cy.get("input#search-field").type('Vertigo');
    cy.get("button#search").click();
    cy.get("#tracks").should(
      "contain",
      "Vertigo"
    );
  });
});
