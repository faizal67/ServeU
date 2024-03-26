const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    status: String,
    from: String,
    to: String,
    time: String,
    timestamp : Date,
    serviceCategory: String,
    serviceName: String,
    price: Number,
    rating: Number,
    review: String,
    location: String,
    serviceUser: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceUser' }, // Reference to ServiceUser
    provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider' } // Reference to Provider
});

module.exports =  mongoose.model('Service',serviceSchema)