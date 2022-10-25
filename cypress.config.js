const { defineConfig } = require("cypress");
const mysql = require("mysql");

function queryTestDb(query, config) {
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}

module.exports = defineConfig({
  projectId: 'u43wrf',
  reporter: 'mochawesome',
  reporterOptions: {
    reportFilename: "[status]_[datetime]-[name]-report",
    timestamp: "longDate"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        queryDb: query => {
          return queryTestDb(query, config);
        }
      });
    },
    "baseUrl": 'http://localhost:4200'
  },
  env: {
    "db": {
      "host": "localhost",
      "user": "root",
      "password": "123456x@X",
    },
    users_url: '/users',
    adduser_url: '/adduser',

  },
  defaultCommandTimeout:30000
});


