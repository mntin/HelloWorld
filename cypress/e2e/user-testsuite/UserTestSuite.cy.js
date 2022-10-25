import {userCmd} from '../../support/page_objects/userCommands.js';
//import {mysqlConnection} from '../../support/util/mysqlDBConnection.js';

let inputUserList=[];
let createUser;
let updateUser;
let deleteUser;
let checkingUser;

async function setupDataTestSuite(user){
    try {
        inputUserList = user;
        for (let i = 0; i < inputUserList.length; i++) {
            if(inputUserList[i].action == 'create'){
                createUser = inputUserList[i]
            }else if(inputUserList[i].action == 'update'){
                updateUser = inputUserList[i]
            }else if(inputUserList[i].action == 'delete'){
                deleteUser = inputUserList[i]
            }else{
                checkingUser = inputUserList[i]
            }
        }
    } catch (e) {
        //handle
    }
}

describe('view - create - update - delete user',()=>{
    before('TS setup',() => {
        console.log("Setup testsuite")
        cy.getInputUserFromDB().then(async (user) => await setupDataTestSuite(user) )

        //inputUserList = mysqlConnection.getUserFromDb()
    })

    beforeEach('TC setup',()=>{
        //visit to homepage
        cy.visit(Cypress.env('users_url'))
    })

    it.skip('view user',()=>{
        userCmd.verifyUser(checkingUser)
    })

    it('create an user',()=>{
        console.log("create user:",createUser)
        userCmd.createUser(createUser)
        userCmd.verifyUserCreatedSuccess(createUser)
    })

    it.skip('update an user',()=>{
        console.log("user entity:",updateUser)
    })

    it.skip('delete an user',()=>{
        console.log("user entity:",deleteUser)
    })
})