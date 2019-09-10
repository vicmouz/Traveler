const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : 'root',
  database : 'traveler'
});

connection.connect(function(err){
  if(err) return console.log(err);
  console.log('conectou!');
  createTable(connection);
})

function createTable(conn){
 
      const sql = "CREATE TABLE IF NOT EXISTS User (\n"+
                  "ID int NOT NULL AUTO_INCREMENT,\n"+
                  "first_name varchar(150) NOT NULL,\n"+
                  "last_name varchar(150) NOT NULL,\n"+ 
                  "email varchar(150) NOT NULL,\n"+
                  "password varchar(150) NOT NULL,\n"+
                  "PRIMARY KEY (ID)\n"+
                  ");";
      
      conn.query(sql, function (error, results, fields){
          if(error) return console.log(error);
          console.log('criou a tabela!');
      });
}