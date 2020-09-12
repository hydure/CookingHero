const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = express.Router();

const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use('/recipes', routes);

//Connect to mongo DB.
mongoose.connect('mongodb://admin:admin123@ds013475.mlab.com:13475/recipes', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully.");
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});