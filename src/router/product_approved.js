const express = require('express');
const router = express.Router();

//include our model
const Product_approved = require('../app/model/product_approved');
// const Product = require('../app/model/products');
const { findById } = require('../app/model/product_approved');
const { default: mongoose } = require('mongoose');

//creat product approved
router.post('/:productId', async (req, res) => {
  const { productId } = req.params;
  mongoose.model('Product').findOne({ _id: productId }, function (err, result) {
    let newProduct = new (mongoose.model('Product_approved'))(result.toJSON()); //or result.toObject
    /* you could set a new id
    newProduct._id = mongoose.Types.ObjectId()
    newProduct.isNew = true
    */
    try {
      result.remove();
      newProduct.save();
      res.status(200).json(newProduct);
    } catch (error) {
      return res.status(401).json({ error: error });
    }

    // swap is now in a better place
  });
});

//get product
router.get('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product_approved.findById(productId);
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
    const product_approved = await db
      .collection('product_approved')
      .find()
      .toArray();
    res.status(200).json({
      product_approved,
    });
  } catch (error) {
    return res.status(401).json({ error: error });
  }
});

//delete product
router.delete('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const product_approved = await Product_approved.findByIdAndDelete(
      { _id: productId },
      {
        new: true,
      }
    );
    if (product_approved.deletedCount === 0) {
      return res.status(404).json({ msg: "can't delete" });
    } else {
      return res.status(200).json(product_approved);
    }
  } catch (error) {
    return res.status(401).json({ error: error });
  }
});

module.exports = router;
