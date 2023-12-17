const express = require("express");
const mysql = require("mysql2");
const config = require("config");
const app = express.Router();

const connectionDetails = {
  host: config.get("server"),
  database: config.get("db"),
  user: config.get("user"),
  password: config.get("pwd"),
};

app.get("/", (request, response) => {
  var connection = mysql.createConnection(connectionDetails);

  const token = request.headers.Authorization.split(" ")[1];


  var statement = `select * from form`;

  connection.query(statement, (error, result) => {
    if (error == null) {
      response.setHeader("Content-Type", "application/json");
      response.write(JSON.stringify(result));
      connection.end();
      response.end();
    } else {
      response.setHeader("Content-Type", "application/json");
      response.write(JSON.stringify(error));
      connection.end();
      response.end();
    }
  });
});

app.post("/", (request, response) => {
  console.log(request.body);

  var connection = mysql.createConnection(connectionDetails);

  var Name = request.body.Name;
  var Age = request.body.Age;
  var Number = request.body.Number;
  var Email = request.body.Email;

  var statement = `insert into form (name, age, no, email) values('${Name}', '${Age}','${Number}','${Email}')`;

  console.log(statement);

  connection.query(statement, (error, result) => {
    if (error == null) {
      response.setHeader("Content-Type", "application/json");
      response.write(JSON.stringify(result));
      connection.end();
      response.end();
    } else {
      response.setHeader("Content-Type", "application/json");
      response.write(JSON.stringify(error));
      connection.end();
      response.end();
    }
  });
});

app.put("/:id", (request, response) => {
  var connection = mysql.createConnection(connectionDetails);

  var Id = request.params.id;
  var Name = request.body.Name;
  var Age = request.body.Age;
  var Number = request.body.Number;
  var Email = request.body.Email;

  var statement = `update form set name = '${Name}', age='${Age}', no ='${Number}', email = '${Email}' where id = '${Id}'`;

  console.log(statement);

  connection.query(statement, (error, result) => {
    if (error == null) {
      response.setHeader("Content-Type", "application/json");
      response.write(JSON.stringify(result));
      connection.end();
      response.end();
    } else {
      response.setHeader("Content-Type", "application/json");
      response.write(JSON.stringify(error));
      connection.end();
      response.end();
    }
  });
});

app.delete("/:id", (request, response) => {
  var connection = mysql.createConnection(connectionDetails);

  var Id = request.params.id;
  console.log(Id);

  var statement = `delete from form where id = '${Id}'`;

  console.log(statement);

  connection.query(statement, (error, result) => {
    if (error == null) {
      response.setHeader("Content-Type", "application/json");
      response.write(JSON.stringify(result));
      connection.end();
      response.end();
    } else {
      response.setHeader("Content-Type", "application/json");
      response.write(JSON.stringify(error));
      connection.end();
      response.end();
    }
  });
});

module.exports = app;
