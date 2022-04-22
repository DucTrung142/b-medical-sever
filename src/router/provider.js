const express = require('express');
const router = express.Router();

const Provider = require('../app/model/providers');

//port provider
router.post('/provider', async (req, res) => {
  const newProvider = new Provider({
    walletAddress: req.body.walletAddress,
    taxcode: req.body.taxcode,
    email: req.body.email,
    representName: req.body.representName,
    representPosition: req.body.representPosition,
    representPhone: req.body.representPhone,
    representId: req.body.representId,
    daterange: req.body.daterange,
    issuedby: req.body.issuedby,
    businessName: req.body.businessName,
    businessNameInternational: req.body.businessNameInternational,
    businessAddress: req.body.businessAddress,
    businessPhone: req.body.businessPhone,
    businessFax: req.body.businessFax,
    certificateUrl: req.body.certificateUrl,
  });
  console.log(req.body);
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

//get provider
router.get('/:providerId', async (req, res) => {
  try {
    const providerId = req.params.providerId;
    console.log(req.params.providerId);
    const provider = await Provider.find({ walletAddress: providerId });
    res.status(200).json({
      provider,
    });
  } catch (error) {
    return res.status(401).json({ error: error });
  }
});

//get all provider
router.get('/provider/getall', async (req, res) => {
  try {
    const provider = await db.collection('providers').find().toArray();
    res.status(200).json({
      provider,
    });
  } catch (error) {
    return res.status(401).json({ error: error });
  }
});

//delete one product
router.delete('/:providerId', async (req, res) => {
  try {
    const providerId = req.params.providerId;
    console.log(providerId);
    const provider = await Provider.findOneAndDelete(
      { providerId },
      {
        new: true,
      }
    );
    if (provider.deletedCount === 0) {
      return res.status(404).json();
    } else {
      return res.status(200).json(provider);
    }
  } catch (error) {
    return res.status(401).json({ error: error });
  }
});

module.exports = router;
