const express = require('express');
const router = express.Router();

const Product = require('../app/model/products');

//port product
router.post('/', async (req, res) => {
  const newProduct = new Product({
    productType: req.body.productType,
    productName: req.body.productName,
    tradenames: req.body.tradenames,
    model: req.body.model,
    unit: req.body.unit,
    price: req.body.price,
    classificationRisk: req.body.classificationRisk,
    manufacturer: req.body.manufacturer,
    countryOfManufacture: req.body.countryOfManufacture,
    owningCountry: req.body.owningCountry,
    ownerFirm: req.body.ownerFirm,
    yearOfManufacture: req.body.yearOfManufacture,
    origin: req.body.origin,
    dateOfManufacture: req.body.dateOfManufacture,
    expirationDate: req.body.expirationDate,
    NameOfBusinessAnnouncingPrice: req.body.NameOfBusinessAnnouncingPrice,
    contactPhoneNumber: req.body.contactPhoneNumber,
    businessAddress: req.body.businessAddress,
    quantity: req.body.quantity,
    generalInformationAboutDevice: req.body.generalInformationAboutDevice,
  });
  console.log(req.body);
  try {
    const saveProduct = await newProduct.save();

    res.json({
      Product: saveProduct,
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
});

//get product
router.get('/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    console.log(req.params.productId);
    const product = await Product.find({ _id: productId });
    res.status(200).json({
      product,
    });
  } catch (error) {
    return res.status(401).json({ error: error });
  }
});

//get all product
router.get('/product/getall', async (req, res) => {
  try {
    const product = await db.collection('products').find().toArray();
    res.status(200).json({
      product,
    });
  } catch (error) {
    return res.status(401).json({ error: error });
  }
});
module.exports = router;
