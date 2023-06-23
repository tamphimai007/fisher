const express = require("express");
const router = express.Router();

//http://localhost:5000/api/test
router.get("/", (req, res) => {
  res.send("Hello API");
});

module.exports = router;
