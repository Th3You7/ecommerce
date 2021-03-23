const express = require("express");
const adminRouter = express.Router();

const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

adminRouter.get(
  "/allproducts",
  asyncHandler(async (req, res) => {
    const data = await Product.find({});

    res.json(data);
  })
);

adminRouter.post(
  "/edit/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const values = req.body;

    const product = await Product.findById(id);

    if (product) {
      product.name = values.name;
      product.price = values.price;
      product.category = product.category;
    }
    const updatedProduct = await product.save();

    res.json(updatedProduct);
  })
);

adminRouter.post(
  "/addproduct",
  asyncHandler(async (req, res) => {
    const values = req.body;

    const data = {
      name: values.name,
      category: values.category.value,
      image: "hoddie.jpg",
      price: values.price,
      availableSizes: {
        40: 2,
        41: 2,
      },
    };

    const product = new Product(data);

    const createdProduct = await product.save();

    res.json(createdProduct);
  })
);

module.exports = adminRouter;
