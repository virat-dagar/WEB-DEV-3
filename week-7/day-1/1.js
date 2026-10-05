// step 1 import mongoose
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    status: Boolean,
});

const User = mongoose.model("User", userSchema);

const main = async () => {
    // step 2 build connection
    await mongoose.connect("mongodb://127.0.0.1:27017/gd");
    console.log("MongoDB is connected");

    // step - 3 create document
    await userModel.insertOne({
        name: "Virat",
        age: 19,
        email: "v@abc.com",
        status: true
    });

    // mongoose.disconnect();
    // console.log("MongoDB is disconnected");
};
main();





