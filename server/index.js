//imports the express and cor library 
const express = require("express");
const cors = require("cors");

//creates an instance of the express application
const app = express();

//tells the application to use cor middleware - handles core express
app.use(cors());

//allows the application to parse JSON
app.use(express.json());

//imports the get compliment functions 
const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { saveQuote } = require('./controller')

//get route for the endpoints which will call the getCompliment function
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/quote",saveQuote)

//starts the server and tells it to listen to server 4000
app.listen(4000, () => console.log("Server running on 4000"));
