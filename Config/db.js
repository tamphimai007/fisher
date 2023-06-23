const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // await mongoose.connect('mongodb://127.0.0.1:27017/roitai')
    await mongoose.connect(
      "mongodb+srv://tamphimai:GuegI6gLYYP73yya@cluster0.1am40jf.mongodb.net/"
    );
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
