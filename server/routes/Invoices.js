const router = require("express").Router();
let Invoice = require("../models/invoice.model");

router.route("/").get((req, res) => {
  Invoice.find()
    .then((invoices) => res.json(invoices))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router
