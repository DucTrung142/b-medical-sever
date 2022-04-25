const express = require('express');
const router = express.Router();

const { db } = require('../app/model/products');
const Product = require('../app/model/products');
const { route } = require('./provider');

//port product
router.post('/', async (req, res) => {
  const newProduct = new Product({
    productType: req.body.productType,
    productName: req.body.productName,
    unit: req.body.unit,
    price: req.body.price,
    manufacturer: req.body.manufacturer,
    countryOfManufacture: req.body.countryOfManufacture,
    dateOfManufacture: req.body.dateOfManufacture,
    expirationDate: req.body.expirationDate,
    NameOfBusinessAnnouncingPrice: req.body.NameOfBusinessAnnouncingPrice,
    contactPhoneNumber: req.body.contactPhoneNumber,
    businessAddress: req.body.businessAddress,
    quantity: req.body.quantity,
    productUrl: req.body.productUrl,
    generalInfo: req.body.generalInfo,
    userManual: req.body.userManual,
    product_approved: req.body.product_approved,
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
    const { productId } = req.params;
    const product = await Product.findById(productId);
    res.status(200).json({
      product,
    });
  } catch (error) {
    return res.status(401).json({ error: error });
  }
});

//get all product
router.get('/getproduct/getall', async (req, res) => {
  try {
    const product = await db.collection('products').find().toArray();
    res.status(200).json({
      product,
    });
  } catch (error) {
    return res.status(401).json({ error: error });
  }
});

//delete product
router.delete('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByIdAndDelete(
      { _id: productId },
      {
        new: true,
      }
    );
    if (product.deletedCount === 0) {
      return res.status(404).json({ msg: "can't delete" });
    } else {
      return res.status(200).json(product);
    }
  } catch (error) {
    return res.status(401).json({ error: error });
  }
});

module.exports = router;
