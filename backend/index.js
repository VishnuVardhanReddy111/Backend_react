const express = require("express");
const mongoose = require("mongoose");

const app = express();
//DwLPdI8unjBxiV5C
mongoose
  .connect(
    "mongodb+srv://vishnuvardhanreddy4386:DwLPdI8unjBxiV5C@cluster0.mjwsdla.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.log("Not Connected successfully"));

app.listen(2000, () => console.log("2000 port is connected"));
