const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Dashboard LP3I 🇮🇩');
});

module.exports = router;
