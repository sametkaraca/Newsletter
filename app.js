//jshint esversion: 6

const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const app = express()

//TODO: We need a static file stuff here to send the browser.

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true})) //We added body parser here

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/signup.html'); 
})   

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port: " + port)
})

/* We use body-perser to grab the form data that was sent by post*/

//API KEY : e479b3ea6595891ed4b7b836ea78e18d-us20
//List ID: 9116cb2b93

