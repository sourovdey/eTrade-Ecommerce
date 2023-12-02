const mongoose = require("mongoose");

async function connectHelper(){
    const db = mongoose.connect("mongodb://127.0.0.1:27017/eTrade");
    return db;
};

module.exports = connectHelper;