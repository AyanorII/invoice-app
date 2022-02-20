const mongoose = require("mongoose");
const Invoice = require("./models/invoice.model");
const data = require("./data.json");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

mongoose.connect(process.env.ATLAS_URI);


Invoice.deleteMany({})
  .then(() => {
    Invoice.insertMany(data)
      .then(() => {
        console.log("Data inserted successfully");
        mongoose.connection.close();
      })
      .catch((err) => {
        console.log(err);
        mongoose.connection.close();
      });
  })
  .catch((err) => {
    console.log(err);
  });

console.log(Invoice.find().length);
