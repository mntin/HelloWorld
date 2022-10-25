export class UserCommands{

    createUser(user){
        cy.get('[href="/adduser"]').click()
        cy.get('#createNameIpts').type(user.name)
        if (user.gender == 'Male'){
            cy.get('#createMGenRbtn').check('Male')
        }else{
            cy.get('#createfGenRbtn').check('Female')
        }

        cy.get('#createEmailIpt').type(user.email)
        //cy.get('.dp-picker-input').type(user.birthday)
        cy.get('#createPhoneIpt').type(user.phone)
        cy.get('#CreateUserSubmit').click()

    }

    verifyUserCreatedSuccess(user){
        cy.get('#userNotificationAlert').find('span').should('include.text','Added new user: \''+user.name+'\' successfully')

    }

    updateUser(user){
        cy.contains(user.email).prev().siblings().first().get('input').check()
        cy.get('[href="//updateuser"]').click()
        cy.get('#updateNameIpt').type(user.name)
        if (user.gender == 'Male'){
            cy.get('#updateMGenRbtn').check()
        }else{
            cy.get('#updateFGenRbtn').check()
        }
        cy.get('#updateEmailIpt').type(user.email)
        cy.get('[class="dp-picker-input ng-pristine ng-valid ng-touched"]').type(user.birthday)
        cy.get('#updatePhoneIpt').type(user.phone)
        cy.get('#updateUserSubmit').click()

    }

    deleteUser(user){
        cy.contains(user.email).prev().siblings().first().get('input').check()
        cy.get('[href="//deleteuser"]').click()
        cy.get('#userDelBtn').click()

    }

    verifyUser(user){
        console.log("verify email user:"+user.email)
        console.log("verify name user:"+user.name)
    }

}

export const userCmd = new UserCommands()