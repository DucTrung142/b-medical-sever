const express = require('express');
const router = express.Router();

const Provider = require('../app/model/providers');

//port provider
router.post('/provider', async (req, res) => {
  const newProvider = new Provider({
    taxcode: req.body.taxcode,
    email: req.body.email,
    username: req.body.username,
    position: req.body.position,
    telephone: req.body.telephone,
    passport: req.body.passport,
    daterange_user: req.body.daterange_user,
    issuedby: req.body.issuedby,
    company: req.body.company,
    international: req.body.international,
    province: req.body.province,
    district: req.body.district,
    ward: req.body.ward,
    address: req.body.address,
    telephone: req.body.telephone,
    fax: req.body.fax,
    certificateUrl: req.body.certificateUrl,
    daterange_company: req.body.daterange_company,
    licensing_authorities: req.body.licensing_authorities,
    group_medical: req.body.group_medical,
    authorization_letter: req.body.authorization_letter,
  });
  try {
    const saveProvider = await newProvider.save();

    res.json({
      provider: saveProvider,
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
});

module.exports = router;
