const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
require('dotenv').config();
const routes = express.Router();

const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use('/recipes', routes);

//Connect to mongo DB.
console.log('mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@ds013475.mlab.com:13475/recipes');
mongoose.connect('mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@ds013475.mlab.com:13475/recipes',
    { useNewUrlParser: true }, (err)=>{
        if (err) {
            console.log('Some problem with the connection: ' + err);
        }
        else {
            console.log('The Mongoose connection is ready!');
        }
    });

app.listen(PORT, function() {
    console.log("Server is running on port: " + PORT + ".");
});