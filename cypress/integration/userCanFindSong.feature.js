describe("user can search for song", () => {
  it ("retrieves song from API", () => {
      cy.visit("/");
      //cy.get("click#searchsong").type("Vertigo");
      //cy.get("select#song").select("song");
      cy.get("input#song").type("Vertigo");
      cy.get("p#song-message").should(
          "contain",
          "U2"
          );
  });
});