const router = require("express").Router();
const { redirect } = require("express/lib/response");
let Invoice = require("../models/invoice.model");

// Sets total price for each item.
const setItemTotal = (req) => {
  req.body.items.forEach((item) => (item.total = item.price * item.quantity));
};

// Gets invoice total.
const getTotal = (items) => items.reduce((acc, item) => acc + item.total, 0);

const getPaymentDue = (req) => {
  const date = new Date(req.body.createdAt);
  date.setDate(date.getDate() + parseInt(req.body.paymentTerms));
  return date;
};

const getId = () => {
  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const NUMBERS = "0123456789";
  const randomId = [];

  for (let i = 0; i < 2; i++) {
    randomId.push(LETTERS[Math.floor(Math.random() * LETTERS.length)]);
  }
  for (let i = 0; i < 4; i++) {
    randomId.push(NUMBERS[Math.floor(Math.random() * NUMBERS.length)]);
  }
  return randomId.join("");
};

const getBody = (req, id, action) => {
  setItemTotal(req);
  if (action === "create") {
    return {
      ...req.body,
      paymentDue: getPaymentDue(req),
      invoiceId: id,
      total: getTotal(req.body.items),
      status: "pending",
    };
  }
  // If action is equal to "update", there is no need to set the the id and the status.
  return {
    ...req.body,
    paymentDue: getPaymentDue(req),
    total: getTotal(req.body.items),
  };
};

const sendResponse = (res, err) => {
  if (err) {
    res.status(400).json("Error: " + err);
  } else {
    res.json();
  }
};

// Root / Index
router.route("/").get((req, res) => {
  Invoice.find()
    .then((invoices) => res.json(invoices))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Show
router.route("/:id").get((req, res) => {
  const { id } = req.params;
  Invoice.findOne({ invoiceId: id })
    .then((invoice) => res.json(invoice))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Create
router.route("/create").post((req, res) => {
  const id = getId();
  const body = getBody(req, id, "create");

  Invoice.create(body, (err, response) => {
    sendResponse(res, err);
  });
});

// Destroy
router.route("/:id").delete((req, res) => {
  const { id } = req.params;
  const filter = { invoiceId: id };
  Invoice.findOneAndDelete(filter, (err, response) => {
    sendResponse(res, err);
  });
});

// Update
router.route("/:id").put((req, res) => {
  const { id } = req.params;
  const filter = { invoiceId: id };
  const body = getBody(req, id, "update");
  const update = { $set: body };
  Invoice.findOneAndUpdate(filter, update, (err, response) => {
    sendResponse(res, err);
  });
});

// Mark as Paid
router.route("/:id/paid").put((req, res) => {
  const { id } = req.params;

  const filter = { invoiceId: id };
  const update = { $set: { status: "paid" } };
  const options = { new: true };
  Invoice.findOneAndUpdate(filter, update, options, (err, response) => {
    sendResponse(res, err);
  });
});

module.exports = router;
