const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/crud');

var UserSchema = new mongoose.Schema(
    {
        username:String,
        email:String,
        password:String
    }
);

module.exports = mongoose.model("User",UserSchema);