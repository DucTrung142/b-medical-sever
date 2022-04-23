const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  productType: {
    type: String,
    // required: true,
  },
  productName: {
    type: String,
    // required: true,
  },
  unit: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  manufacturer: {
    type: String,
    //   required:true,
  },
  countryOfManufacture: {
    type: String,
    // required: true,
  },

  dateOfManufacture: {
    type: Date,
    // required: true,
  },
  expirationDate: {
    type: Date,
    // required: true,
  },
  NameOfBusinessAnnouncingPrice: {
    type: String,
    // required: true,
  },
  contactPhoneNumber: {
    type: Number,
    // required: true,
  },
  businessAddress: {
    type: String,
    // required: true,
  },
  quantity: {
    type: Number,
    // required: true,
  },
  productUrl: {
    type: String,
    // required: true,
  },
  generalInfo: {
    type: String,
    // required: true,
  },
  userManual: {
    type: String,
    // required: true,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
