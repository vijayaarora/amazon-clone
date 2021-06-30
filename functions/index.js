const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IL4F8JoUGOD3GnEBETAa7uPGTapj0g33j5okYARa0duqPIOpTMNUZBEw1aUkxciFfWzPkirCqn91tdHrSoVO27v00zT74rSdG')

//API

//-App config
const app = express();

//-Middlewires
app.use(cors({ origin : true }))
app.use(express.json())

//-API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

//-Listen command
exports.api = functions.https.onRequest(app)