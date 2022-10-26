export class UserCommands{

    createUser(user){
        cy.get('[href="/adduser"]').click()
        cy.get('#createNameIpt').type(user.name)
        if (user.gender == 'Male'){
            cy.get('#createMGenRbtn').check('Male')
        }else{
            cy.get('#createfGenRbtn').check('Female')
        }

        cy.get('#createEmailIpt').type(user.email)
        cy.get('#createPhoneIpt').type(user.phone)
        cy.get('#CreateUserSubmit').click()

    }

    verifyUserCreatedSuccess(user){
        cy.get('#userNotificationAlert').find('span').should('include.text','Added new user: \''+user.name+'\' successfully')

    }

    updateUser(user){
        cy.contains(user.email).parent().siblings().first().get('input').check()
        cy.get('[href="/updateuser"]').click()
        cy.get('#updateNameIpt').clear().type(user.name)
        if (user.gender == 'Male'){
            cy.get('#updateMGenRbtn').check()
        }else{
            cy.get('#updateFGenRbtn').check()
        }
        cy.get('#updateEmailIpt').clear().type(user.email)
        cy.get('#updatePhoneIpt').clear().type(user.phone)
        cy.get('#updateUserSubmit').click()

    }

    verifyUserUpdatedSuccess(user){
        cy.get('#userNotificationAlert').find('span').should('include.text','Updated user: \''+user.name+'\' successfully')

    }

    deleteUser(user){
        cy.contains(user.email).parent().siblings().first().get('input').check()
        cy.get('[href="/deleteuser"]').click()
        cy.get('#userDelBtn').click()

    }
    verifyUserDeletedSuccess(user){
        cy.get('#userNotificationAlert').find('span').should('include.text','Deleted user: \''+user.name+'\' successfully')

    }

    verifyUser(user){
        cy.get('table').contains('td', user.name).should('be.visible').and('have.text',user.name);
        cy.get('table').contains('td', user.birthday).should('be.visible').and('have.text',user.birthday);
        cy.get('table').contains('td', user.gender).should('be.visible').and('have.text',user.gender);
        cy.get('table').contains('td', user.phone).should('be.visible').and('have.text',user.phone);
        cy.get('table').contains('td', user.email).should('be.visible').and('have.text',user.email);

    }

}

export const userCmd = new UserCommands()