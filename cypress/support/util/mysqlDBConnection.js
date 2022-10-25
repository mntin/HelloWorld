export class MysqlDBConnection{

    getUserFromDb(){
        cy.task(
            "queryDb",
            `SELECT * FROM auto_db.users`
        ).then((users) => {
            return users;
        });
    }
}
export const mysqlConnection = new MysqlDBConnection()