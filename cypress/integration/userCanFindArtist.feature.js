describe("user can search for artist", () => {
    beforeEach(() => {
      cy.server()
      cy.route({
        method: 'GET', 
        url: "http://localhost:3000/api/v1/artists**",
        response: "fixture:artist_data.json"
      })
      cy.visit("/");
    });
  
    it("retrieves artist from API", () => {
      cy.get("input#search-field").type('U2');
      cy.get("button#search").click();
      cy.get("#artist").should(
        "contain",
        "U2"
      );
    });
  
    // describe("SAD PATH user can search for song", () => {
    //   beforeEach(() => {
    //    cy.server();
    //     })      
    //     it("User invalid search", () => {
    //       cy.route({
    //         method: 'GET',
    //         url: "http://localhost:3000/api/v1/tracks**",
    //         status: "400",
    //         response: {
    //           song_not_found: ['There are no matches for the artist you are trying to search for']
    //         }
    //       });
    //         cy.visit("/");
    //         cy.get("input#search-field2").type('asdasdasdasd');
    //         cy.get("button#searchartist").click();
    //        cy.get('#error_message').should('contain', 'no matches for the artist')
    //     });
    //   });
  })
  