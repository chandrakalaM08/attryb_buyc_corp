const express = require("express");
const { dbConnection } = require("./configs/db.js");
require("dotenv").config();

const cors = require("cors");

const app = express();

app.use(cors()); //to avoid errors on frontend due to cross origin requests
app.use(express.json()); //to get the data from the fronted in json  parsed format

app.listen(process.env.port, async () => {
  try {
    console.log(`Server is running at port ${process.env.port}`);
    await dbConnection;
    console.log("Successfully connected to database");
  } catch (error) {
    console.log(error);
  }
});
