let ctx=[];
window.ss= [];
before(() => {

  cy.getInputUserFromDB().then(async (user) => await setupDataTestSuite(user) )

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
  it.skip('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  it.skip('passes1', () => {
    cy.task(
        "queryDb",
        `SELECT * FROM auto_db.users`
    ).then(count => {
      expect(count).to.have.lengthOf(3);
    });
  })
})

