const mongoose = require('mongoose')


const salarySchema = new mongoose.Schema({
  liveIn: [Number],
  fullDay: [Number],
  partTime: [Number]
})

const previousExperienceSchema = new mongoose.Schema({
  city: String,
  salary: Number,
  duration : [Number]
})

const reviewSchema = new mongoose.Schema({
  userName: String,
  text: String,
  rating: Number
})

const maidSchema = new mongoose.Schema({
    name: String,
    gender: String,
    verified: Boolean,
    rating: Number,
    mobile: String,
    whatsApp: String,
    city: String,
    address: String,
    experience: Number,
    language: [String],
    expectedSalary: [Number],
    available: String,
    availableAs: [String],
    expertiseIn: [String],
    salary: salarySchema,
    age: Number,
    about: String,
    education: Number,
    withUsSince: String,
    previousExperience: [previousExperienceSchema],
    reviews: [reviewSchema]
})

maidSchema.set('toJSON',{
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
  module.exports = mongoose.model('Maid', maidSchema)




  // const mongoose = require('mongoose');
  // const Schema = mongoose.Schema;
  
  // // Schema for Services Provided
  // const ServiceSchema = new Schema({
  //     serviceName: { type: String, required: true },
  //     description: { type: String, required: true },
  //     // Add other fields as needed
  // });
  
  // // Schema for Customer Bookings
  // const BookingSchema = new Schema({
  //     customerName: { type: String, required: true },
  //     service: { type: Schema.Types.ObjectId, ref: 'Service' },
  //     bookingDate: { type: Date, default: Date.now },
  //     // Add other fields as needed
  // });
  
  // // Schema for Maid Service Provider
  // const MaidServiceSchema = new Schema({
  //     name: { type: String, required: true },
  //     address: { type: String, required: true },
  //     phone: { type: String, required: true },
  //     services: [ServiceSchema], // Embedded Service Schema
  //     bookings: [BookingSchema], // Embedded Booking Schema
  //     // Add other fields as needed
  // });
  
  // const MaidService = mongoose.model('MaidService', MaidServiceSchema);
  // const Service = mongoose.model('Service', ServiceSchema);
  // const Booking = mongoose.model('Booking', BookingSchema);
  
  // module.exports = { MaidService, Service, Booking };
  
