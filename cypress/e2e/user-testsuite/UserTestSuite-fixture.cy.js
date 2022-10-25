import {userCmd} from '../../support/page_objects/userCommands.js';
//import {mysqlConnection} from '../../support/util/mysqlDBConnection.js';

let inputUserList=[];
let createUser;
let updateUser;
let deleteUser;
let checkingUser;

describe('view - create - update - delete user',()=>{
    before('TS setup',() => {
        console.log("Setup testsuite")
        cy.fixture('inputUsersDb.json').as('users').then(users =>{
                users.forEach(user =>{
                    console.log('user:',user)
                    if(user.action == 'create'){
                        createUser = user
                    }else if(user.action == 'update'){
                        updateUser = user
                    }else if(user.action == 'delete'){
                        deleteUser = user
                    }else{
                        checkingUser = user
                    }
                })
        })

    })

    beforeEach('TC setup',() => {
        //visit to homepage
        cy.visit(Cypress.env('users_url'))
    })

    it('create an user',()=>{
        console.log("create user:",createUser)
        userCmd.createUser(createUser)
        userCmd.verifyUserCreatedSuccess(createUser)
    })

    it('view user',()=>{
        userCmd.verifyUser(checkingUser)
    })

    it('update an user',()=>{
        console.log("user entity:",updateUser)
        userCmd.updateUser(updateUser)
        userCmd.verifyUserUpdatedSuccess(updateUser)
    })

    it('delete an user',()=>{
        console.log("user entity:",deleteUser)
        userCmd.deleteUser(deleteUser)
        userCmd.verifyUserDeletedSuccess(deleteUser)
    })
})