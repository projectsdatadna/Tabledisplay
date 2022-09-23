const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql')
const cors = require ('cors')

const db = mysql.createConnection({
    connectionLimit: '10',
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodedb'
});

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

app.get("/get", (req,res)=>{
const id = req.params.id;
 db.query("SELECT * FROM my_name WHERE id = 1", id, 
 (err,result)=>{
    if(err) {
    console.log(err)
    } 
    res.json(result)
    });   });

app.listen(3002, () =>{
    console.log("Server running in PORT 3002");
})