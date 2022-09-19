const express = require('express');
const router = express.Router();

const tourController = require('../controllers/tour.controller');
const viewCount = require('../middleware/viewCount');

router.route('/bulk-update')
.patch(tourController.updateAllTour)

router.route('/')
.post(tourController.createTour)
.get(tourController.getAllTour)

router.route('/:id')
.get(tourController.getATour)

module.exports = router;