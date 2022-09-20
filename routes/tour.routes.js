const express = require('express');
const router = express.Router();

const tourController = require('../controllers/tour.controller');
const viewCount = require('../middleware/viewCount');

router.route('/bulk-update')
.patch(tourController.updateAllTour)
router.route('/cheapest')
.get(tourController.cheapestTour)

router.route('/')
.post(tourController.createTour)
.get(tourController.getAllTour)

router.route('/:id')
.get(viewCount ,tourController.getATour)

module.exports = router;