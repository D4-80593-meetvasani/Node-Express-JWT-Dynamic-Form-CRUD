const express = require("express");
const config = require("config");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const empsApp = require("./routes/emps");
const loginApp = require("./routes/login");


const PORT = config.get("PORT");
const key = config.get("jwtkey");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/verifyToken", (request, response) => {
  const token = request.headers.authorization.split(" ")[1];

  try {
    const payloadDecodedFromToken = jwt.verify(token, key);

    if (payloadDecodedFromToken.createdat === "14122023") {
      response.json({ message: "success" });
    } else {
      response.status(401).json({ message: "Invalid Token!" });
    }
  } catch (error) {
    response.status(401).json({ message: "Invalid Token!" });
  }
});

app.use((request, response, next) => {
  if (!request.url.includes("login")) {
    //imagin GET call to /emps
    console.log(request.headers.authorization);
    if (
      request.headers.authorization != undefined ||
      request.header.authorization != null
    ) {
      console.log(
        "Authorization header received is " + request.headers.authorization
      );

      //Split the header content
      var headerContents = request.headers.authorization.split(" ");

      var payloadDecodedFromToken = jwt.verify(headerContents[1], key);

      if (payloadDecodedFromToken.createdat == "14122023") {
        //you can perform various checks here
        //like .. time when token was given using "createdat"
        //and any information sent inside token can be used
        //here to re verify.
        request.headers.Authorization = `Bearer ${headerContents[1]}`;
        console.log("Token verified successfully");

        next();
      } else {
        //Prepare response
        var responseMessage = {
          message: "Invalid Token!",
        };

        //send it as response
        response.write(JSON.stringify(responseMessage));
        response.end();
      }
    } else {
      //ask user to login and get token first

      //Prepare response
      var responseMessage = {
        message: "Need Token!",
      };

      //send it as response
      response.write(JSON.stringify(responseMessage));
      response.end();
    }
  } else {
    next();
  }
});

app.use("/login", loginApp);
app.use("/emps", empsApp);

app.listen(PORT, () => {
  console.log(`server started listening at ${PORT}`);
});

