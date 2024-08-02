const express = require('express');
const router = express.Router();
const { Program } = require('../models')

/* GET programs listing. */
router.get('/', async (req, res) => {
  try {
    const response = await Program.findAll({
      attributes: ['uuid','code','title','campus','level','regular','employee','status']
    });
    return res.status(200).json(response);
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

module.exports = router;