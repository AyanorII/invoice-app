const router = require("express").Router();
let Invoice = require("../models/invoice.model");

router.route("/").get((req, res) => {
  Invoice.find()
    .then((invoices) => res.json(invoices))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  const { id } = req.params;
  Invoice.findOne({ invoiceId: id })
    .then((inv) =>  res.json(inv))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
