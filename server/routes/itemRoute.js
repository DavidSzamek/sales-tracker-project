const express = require("express");
const { Product } = require("../models");
const router = express.Router();
const Item = require("../models/ItemModel");

router.route("/create").post((req, res) => {
    const productName = req.body.productName;
    const size = req.body.size;
    const sku = req.body.sku;
    const rrp = req.body.rrp;
    const promo = req.body.promo;
    const status = req.body.status;

    const newItem = new Item({
        productName,
        size,
        sku,
        rrp,
        promo, 
        status,
    });

    newItem.save();
})

router.route("/products").get((req, res) => {
    Product.find()
    .then (foundProducts => res.json(foundProducts))
})

module.exports = router;