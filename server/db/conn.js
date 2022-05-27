const mongoose = require("mongoose");

const DB = process.env.MONGO_URI;

mongoose
  .connect(DB)
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((error) => {
    console.log(`connection failed ${error.message}`);
  });
