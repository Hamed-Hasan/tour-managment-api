
// post tour controller

const Tour = require("../models/tour")
const { createTourService, getTourService, getTourServices } = require("../services/tour.service")

exports.createTour = async (req, res) => {
   try {
    const tour = await createTourService(req.body)
   
    res.status(200).json({
        status: 'success',
        message: 'Tour Inserted Successfully',
        data: tour,
    })
   } catch (error) {
    res.status(400).json({
        status: 'Fail',
        message: 'Tour Inserted Fail',
        error: error.message
    })
   } 
}
exports.getAllTour = async (req, res) => {
   try {
    const tour = await getTourServices(req.query)
   
    res.status(200).json({
        status: 'success',
        message: 'Tour getting Successfully',
        data: tour,
    })
   } catch (error) {
    res.status(400).json({
        status: 'Fail',
        message: 'Tour getting Fail',
        error: error.message
    })
   } 
}