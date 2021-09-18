const mongoose = require("mongoose");
require("dotenv").config()

const connect = async (connectString) => {
  try {
    await mongoose.connect(connectString,{
        
    }).then(() => {
      console.log("database is Opened");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connect };
