const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; 
const mysql = require('mysql');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'POST, GET');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
router.get('/users', (req, res) =>{
    execSQLQuery('SELECT * FROM user', res);

})

router.post('/Postuser', (req, res, next) =>{
  console.log('entrei no post!'); 
   const  first_name = req.body.first_name.substring(0,150);
    const last_name = req.body.last_name.substring(0,150);
    const email = req.body.email.substring(0,150);
    const password = req.body.email.substring(0,150);
    console.log(first_name);
    console.log(last_name);
    console.log(email);
    console.log(password);
    execSQLQuery(`INSERT INTO user(first_name, last_name, email, password) VALUES('${first_name}','${last_name}','${email}', '${password}')`, res);
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




