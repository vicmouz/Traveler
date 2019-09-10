

const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; 
const mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
router.get('/users', (req, res) =>{
    execSQLQuery('SELECT * FROM user', res);

})

router.post('/Postuser', (req, res) =>{
  console.log('entrei no post!'); 
   const  first_name = req.headers.first_name.substring(0,150);
    const last_name = req.headers.last_name.substring(0,150);
    const email = req.headers.email.substring(0,150);
    console.log(first_name);
    console.log(last_name);
    console.log(email);
    execSQLQuery(`INSERT INTO user(first_name, last_name, email) VALUES('${first_name}','${last_name}','${email}')`, res);
});

app.use('/', router);
app.listen(port);
console.log('API funcionando!');

function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : 'root',
    database : 'traveler'
  });
 
  connection.query(sqlQry, function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });
}




