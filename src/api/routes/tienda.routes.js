const express = require("express");

const router = express.Router();

const {
  getTienda,
  postTienda,
  putTienda,
  deleteTienda,
  getTiendaByCity } = require("../controllers/tienda.controller");

router.get("/", getTienda);
router.get("/city/:city", getTiendaByCity);
router.post("/", postTienda);
router.put("/:id", putTienda);
router.delete("/:id", deleteTienda);

module.exports = router;