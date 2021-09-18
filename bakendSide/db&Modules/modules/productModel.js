const mongoos = require("mongoose")

const Product = mongoos.Schema(
    {
        title: String,
        type: String,
        deskription: String,
        price: Number,
        images: Array,
        totalErnings: Number,
        earningsByDays: Array,
    }
)

module.exports = mongoos.model("product", Product)