const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    // port:3306,
    database: "riafy"    
   
  });
   
  // open the MySQL connection
  dbConn.connect(error => {
      if (error){
          console.log("A error has been occurred "
              + "while connecting to database.");       
          throw error;
      }
      console.log("Mysql connected")
       
    
  });
  module.exports =dbConn