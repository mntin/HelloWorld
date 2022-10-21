// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//const { defineConfig } = require("cypress");

Cypress.Commands.add('createNewUser', (userName,email)=>{
    console.log("userName="+userName);
    console.log("email="+email);
})

Cypress.Commands.add('getInputUserFromDB', ()=> {
    cy.task(
        "queryDb",
        `SELECT * FROM auto_db.users`
    ).then((users) => {
        console.log(users[0].email);
        return users;
    });

})

