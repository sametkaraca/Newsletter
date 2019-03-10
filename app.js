//jshint esversion: 6

const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const port = 3000

const app = express()

//TODO: We need a static file stuff here to send the browser.

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true})) //We added body parser here




app.get('/', function (req, res) {
  res.sendFile(__dirname + '/signup.html'); 
})  

//We set a POST route here. We reach the DOM element by calling his name with body parser
app.post("/", function(req,res){

  var firstName = req.body.fName
  var lastName = req.body.lName
  var email = req.body.email

})

app.listen(port, function(){
  console.log("Server is running on port: " + port)
})

/* We use body-perser to grab the form data that was sent by post*/