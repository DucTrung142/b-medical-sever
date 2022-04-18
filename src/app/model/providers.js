const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
  taxcode: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  username: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    // required: true,
  },
  telephone: {
    type: String,
    // required: true,
  },
  passport: {
    type: String,
    // required: true,
  },
  daterange_user: {
    type: Date,
    //   required:true,
  },
  issuedby: {
    type: String,
    // required: true,
  },
  company: {
    type: String,
    // required: true,
  },
  international: {
    type: String,
    // required: true,
  },
  province: {
    type: String,
    // required: true,
  },
  district: {
    type: String,
    // required: true,
  },
  ward: {
    type: String,
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  telephone: {
    type: String,
    // required: true,
  },
  fax: {
    type: String,
    // required: true,
  },
  certificateUrl: {
    type: String,
    // required: true,
  },
  daterange_company: {
    type: String,
    // required: true,
  },
  licensing_authorities: {
    type: String,
    // required: true,
  },
  group_medical: {
    type: String,
    // required: true,
  },
  authorization_letter: {
    type: String,
    // required: true,
  },
});

module.exports = mongoose.model('Provider', ProviderSchema);
