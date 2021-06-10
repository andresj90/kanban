require('custom-env').env(true)

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models/');
//routes 
const user = require('./routes/user.js');

//app
const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
}

//DB CONNECTION
// db.connect()
//             .then((response) => console.log(response))
//             .catch((error) => console.error(error));

//app use middleware
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//set por to listen to requests 
const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.json({
        hello : ""
    });
});
app.use('/user', user);

module.exports = app;