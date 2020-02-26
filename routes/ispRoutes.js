const express = require('express');
const router = express.Router();
const ispController = require('./../controller/ispController');

router.route('/')
    .get(ispController.getAllProvider)
    .post(ispController.addIspProvider)

router.get('/:id',ispController.getIsp);

module.exports = router;