const mongoose = require('mongoose');

const FarmerSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    category: String,
    cover: String,
    latitude: Number,
    longitude:Number
},
{
    timestamps: true,
});

const FarmerModel = mongoose.model('user',FarmerSchema);

module.exports = FarmerModel;