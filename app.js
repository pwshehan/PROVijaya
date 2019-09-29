const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv/config');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const postRoute = require('./Routes/posts');

app.use('/posts', postRoute);

app.get('/', (req, res) => {
    res.send('We are on home');
});

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected")
);

app.listen(3000);


// let express = require('express');

// let bodyParser = require('body-parser');

// let app = express();


// let apiRoutes = require("./api-routes");

// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});


// var port = process.env.PORT || 8080;


// app.get('/', (req, res) => res.send('Hello World with Express'));


// app.use('/api', apiRoutes);

// app.listen(port, function () {
//     console.log("Running RestHub on port " + port);
// });