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
    .then((invoice) => res.json(invoice))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/create").post((req, res) => {
  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const NUMBERS = "0123456789";
  console.log(req.body);

  const id = () => {
    const randomId = [];
    for (let i = 0; i < 2; i++) {
      randomId.push(LETTERS[Math.floor(Math.random() * LETTERS.length)]);
    }
    for (let i = 0; i < 4; i++) {
      randomId.push(NUMBERS[Math.floor(Math.random() * NUMBERS.length)]);
    }
    return randomId.join("");
  };

  const getPaymentDue = () => {
    const date = new Date(req.body.createdAt);
    date.setDate(date.getDate() + parseInt(req.body.paymentTerms));
    return date;
  };

  // Sets total price for each item
  req.body.items.forEach((item) => item.total = item.price * item.quantity);

  // Sets total price for invoice
  const total = req.body.items.reduce((acc, item) => acc + item.total, 0);

  const body = {
    ...req.body,
    paymentDue: getPaymentDue(),
    invoiceId: id(),
    total,
    status: "pending",
  };
  Invoice.create(body, (err, response) => {
    if (err) {
      res.status(400).json("Error: " + err);
    } else {
      res.json(response);
    }
  })
});

module.exports = router;
