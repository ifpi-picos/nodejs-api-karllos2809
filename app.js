const express = require('express');
const bodyParser = require ('body-parser');
const routes = require ("./routes")
const conectaMongoDB = require ('./Config/mongodb')

const app = express();
app.use(bodyParser.json());
app.use('/', routes); 
conectarMongoDB();

app.listen(3000, ()=> console.log('app online...'))