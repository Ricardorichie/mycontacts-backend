const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const { connectDb } = require("./config/dbConnection");

const dotenv = require("dotenv").config();
connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json()); //body-parser for data parsed in req
app.use("/api/contacts", require("./routes/contactRoutes"));

app.use(errorHandler); //handle error

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
