
const Listing = require("../models/homes.model.js"); 

// FIND ALL listings
module.exports.findAllListings = (req, res) => {
  Listing.find()
    .sort({ _id: -1 })
    .then((allListings) => {
      res.status(200).json(allListings);
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};

// CREATE new home listing
module.exports.createListing = (req, res) => {   
  Listing.create(req.body)
    .then((newListing) => {
      res.json(newListing)
    })
    .catch((err) => {
      res.status(400).json({ err });
      console.log(err)
    });
}