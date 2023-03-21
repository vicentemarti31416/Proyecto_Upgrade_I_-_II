const express = require("express");

const router = express.Router();

const {
  getCliente,
  postCliente,
  putCliente,
  deleteCliente,
  getClienteByCity } = require("../controllers/cliente.controller");

router.get("/", getCliente);
router.get("/city/:city", getClienteByCity);
router.post("/", postCliente);
router.put("/:id", putCliente);
router.delete("/:id", deleteCliente);

module.exports = router;
