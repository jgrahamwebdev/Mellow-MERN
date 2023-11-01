
const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
    address: {
        type: String,
        required: [true, "Please put address of listing"],
    },
    price: {
        type: Number,
        required: [true, "Must be a number greater than 0"],
    },
    description: {
        type: String,
        required: [true, "Please add a description about your listing"],
    },
    firstName: {
        type: String,
        required: [true, "Please put your first name"],
    },
    lastName: {
        type: String,
        required: [true, "Please put your last name"],
    },

}, { timestamps: true })

const Listing = mongoose.model("Listing", ListingSchema);

module.exports = Listing;