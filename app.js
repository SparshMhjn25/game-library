require('dotenv').config();

const express = require("express");
const app = express();
const genreRouter = require('./routes/genreRouter');
const gameRouter = require('./routes/gameRouter');
const cors = require('cors');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use('/', genreRouter);
app.use('/', gameRouter);
app.listen('8080', ()=> console.log("Server is now online..."));