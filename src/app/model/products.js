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
  tradenames: {
    type: String,
    // required: true,
  },
  model: {
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
  classificationRisk: {
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
  owningCountry: {
    type: String,
    // required: true,
  },
  ownerFirm: {
    type: String,
    // required: true,
  },
  yearOfManufacture: {
    type: Number,
    // required: true,
  },
  origin: {
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
  generalInformationAboutDevice: {
    type: String,
    // required: true,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
