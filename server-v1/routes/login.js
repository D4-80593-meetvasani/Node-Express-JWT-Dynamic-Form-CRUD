const express = require("express");
const config = require("config");
const jwt = require("jsonwebtoken");
const app = express.Router();

const key = config.get("jwtkey");

app.post("/", (request, response) => {
  var username = request.body.username;
  var password = request.body.password;

  // Your DB Check logic
  if (username == "meet" && password == "meet@123") {
    //Create Payload to be sent inside token
    var payload = {
      username: "meet",
      createdat: "14122023",
    };

    //Create a token
    var token = jwt.sign(payload, key);
    console.log(token);

    //Prepare response
    var responseMessage = {
      loginToken: token,
      message: "success",
    };

    //send it as response
    response.write(JSON.stringify(responseMessage));
    response.end();
  } else {
    //send invalid credentials response

    //Prepare response
    var responseMessage = {
      message: "failure",
    };

    //send it as response
    response.write(JSON.stringify(responseMessage));
    response.end();
  }
});

module.exports = app;
