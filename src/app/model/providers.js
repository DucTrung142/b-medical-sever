const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
  walletAddress: {
    type: String,
    // required: true,
  },
  taxcode: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  representName: {
    type: String,
    // required: true,
  },
  representPosition: {
    type: String,
    // required: true,
  },
  representPhone: {
    type: String,
    // required: true,
  },
  representId: {
    type: String,
    // required: true,
  },
  daterange: {
    type: Date,
    //   required:true,
  },
  issuedby: {
    type: String,
    // required: true,
  },
  businessName: {
    type: String,
    // required: true,
  },
  businessNameInternational: {
    type: String,
    // required: true,
  },
  businessAddress: {
    type: String,
    // required: true,
  },
  businessPhone: {
    type: String,
    // required: true,
  },
  businessFax: {
    type: String,
    // required: true,
  },
  certificateUrl: {
    type: String,
    // required: true,
  },
  
});

module.exports = mongoose.model('Provider', ProviderSchema);
