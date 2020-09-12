const PORT = 4000;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose').set('useUnifiedTopology', true);
let Recipe = require('./src/Schemas/recipe.model');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

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

// Handling API Routes.
const routes = express.Router();

// Fetch all the saved recipes.
routes.route('/').get(function(req, res) {
    Recipe.find(function(err, recipes) {
        if (err) {
            console.log(err);
        } else {
            res.json(recipes);
        }
    });
});

// Add a new recipe.
routes.route('/add').post(function(req, res) {
    let recipe = new Recipe(req.body);
    recipe.save()
        .then (recipe => {
            res.status(200).json({'Recipe': "Recipe added successfully!"});
        })
        .catch (err => {
            res.status(400).send("Adding a new recipe failed.");
        });
});

app.use('/recipes', routes);

// Listening for incoming connections on specified port.
app.listen(PORT, function() {
    console.log("Server is running on port: " + PORT + ".");
});