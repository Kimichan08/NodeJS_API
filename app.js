const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/api.route');

app.use(express.static(__dirname + '/public/uploads'));

app.use(bodyParser.json());
app.use(express.json());
app.set(bodyParser.urlencoded({extended:true}));
api(app)
app.listen(8000,()=>{
    console.log("listen to http://localhost:8000");
})