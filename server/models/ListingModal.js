const mongoose = require('mongoose');

const ListingSchema = mongoose.Schema({
    name: String,
    email: String,
    type: Boolean,
    rate: Number,
    descp: String,
    cover: String,
},
{
    timestamps: true,
});

const ListingModel = mongoose.model('list',ListingSchema);

module.exports = ListingModel;