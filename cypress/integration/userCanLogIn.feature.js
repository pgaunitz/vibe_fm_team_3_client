describe('User can login', () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it('successfully', () => {
        cy.get("#login").click();
        cy.get("#login-form").within(() => {
          cy.get("#email").type("user@mail.com");
          cy.get("#password").type("password");
          cy.get('button').contains('Submit').click()
        });
        cy.get('#message').should('contain', "Hi user@mail.com");
    });
    })
    it('unsuccessfully', () => {
      cy.get('#login').within(() => {
      cy.get('#email').type('user@mail.com');
      cy.get('#password').type('wrongpassword');
      cy.get('button').contains('Submit').click()
    });
    cy.get("#message").should("contain", "Invalid login credentials. Please try again.");
    });