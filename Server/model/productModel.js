const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    productName :{
        type : String,
        require : [true, "Please Add Your Product Name"]
    },
    productPrice : {
        type : Number,
        require : [true, "Please Add Your Profuct Price"]
    },
    productDiscPrice : {
        type : Number,
        require : [true, "Please Add Your Profuct Price"]
    },
    productDiscount : {
        type : Number,
        require : false
    },
    productImg : {
        type : String,
        require : true
    },
    smallText : {
        type : String,
        require : true
    },
    specificationsText : {
        type : String,
        require : true
    },
    careMainText : {
        type : String,
        require : true
    },
    productQty : {
        type : Number,
        require : true
    },
    productColor : {
        type : String,
        require : false
    }
});

module.exports = mongoose.model.Products || mongoose.model("Product", ProductSchema);