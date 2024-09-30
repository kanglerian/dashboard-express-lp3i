const express = require('express');
const router = express.Router();

const { Program, ProgramInterest } = require('../models')

/* GET programs page. */
router.get('/', async (req, res) => {
  try {
    const response = await Program.findAll({
      where: {
        status: "1"
      },
      include: [
        { model: ProgramInterest, as: 'interests', attributes: ['name', 'status'] }
      ],
      attributes: ['uuid', 'code', 'title', 'campus', 'level', 'image', 'type', 'status'],
    });
    return res.status(200).json(response);
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

router.post('/', async (req, res) => {
  try {
    await Program.create(req.body);
    return res.status(200).json({
      message: 'Program has been created!'
    });
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

/* GET program interests page. */
router.get('/interest', async (req, res) => {
  try {
    const response = await ProgramInterest.findAll({
      attributes: ['name', 'status'],
    });
    return res.status(200).json(response);
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

router.post('/interest', async (req, res) => {
  try {
    await ProgramInterest.create(req.body);
    return res.status(200).json({
      message: 'Program interest has been created!'
    });
  } catch (error) {
    return res.json({
      message: error.message
    });
  }
});

module.exports = router;
