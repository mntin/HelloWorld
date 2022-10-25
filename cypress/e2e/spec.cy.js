let ctx=[];
window.ss= [];
before(() => {

  cy.getInputUserFromDB().then(async (user) => await setupDataTestSuite(user) )
  //cy.wrap(null).then(() => {
  //  ctx = setupDataTestSuite();
    //console.log("before:"+ctx[0].email)
  //})
  //let ctx = await setupDataTestSuite();
  //console.log("before:"+ctx[0])
  //console.log("before:"+ctx[0].email)

})

async function setupDataTestSuite(user){
  try {
   //return await cy.getInputUserFromDB();
    //console.log("ctx1:" + ctx)
    console.log(user)
    ctx = user;
  } catch (e) {
    //handle
  }
}

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  it('passes1', () => {
    cy.task(
        "queryDb",
        `SELECT * FROM auto_db.users`
    ).then(count => {
      expect(count).to.have.lengthOf(3);
    });
  })
})

describe('e2e', () => {

  it('passes2', () => {
    console.log("abc:"+ctx[0].email);

   /* cy.getInputUserFromDB().then(value => {
      new Cypress.Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(ctx=value)
        }, 2000)
      })
      console.log("ctx1:"+ctx)
    });*/

    cy.createNewUser("aa","bbS").then((user)=>{console.log("user")});
    //cy.contains('.abc').type('abc');
    //cy.visit('https://24h.com.vn');
    cy.contains('.abc').type('abc');
    if(ctx[0].email){
      console.log("ctx3:"+ctx[0].email)
    }


  })
})

