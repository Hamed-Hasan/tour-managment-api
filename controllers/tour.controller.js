const mongoose = require('mongoose');
const viewCount = require('../middleware/viewCount');
// post tour controller

const Tour = require("../models/tour")
const { createTourService, getTourServices, getATourService, updateAllTourService, cheapestTourService, trendingTourService } = require("../services/tour.service")

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


    let filters = { ... req.query };
    const excludeFields = ['sort', 'page', 'limit'];
    excludeFields.forEach((field) => delete filters[field]);
    let filterString = JSON.stringify(filters);
    filterString = filterString.replace(
        /\b(gt|gte|lt|lte|inc)\b/g,
        (match) => `$${match}`
      );
   console.log(filterString);
filters = JSON.parse(filterString);
console.log(filters)

const queries = {};
if(req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    queries.sortBy = sortBy;
    console.log(sortBy);
}


if (req.query.fields) {
    const fields = req.query.fields.split(",").join(" ");
    queries.fields = fields;
    console.log(fields);
  }

if (req.query.limit) {
    const limit = req.query.limit.split(",").join(" ");
    queries.limit = limit;
    console.log(limit);
  }

if (req.query.page) {
    const page = req.query.page.split(",").join(" ");
    queries.page = page;
    console.log(page);
  }

  const tour = await getTourServices(filters, queries)
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


exports.getATour = async (req, res) => {
    try {
        const id = req.params;

        if(!mongoose.Types.ObjectId(id)){
           return res.status(400).json({ 
                status: false,
                message: 'Invalid Tour Info',
                error: error.message
            })
        }
     const tour = await getATourService({_id: mongoose.Types.ObjectId(id)})
    
     res.status(200).json({
         status: 'success',
         message: 'Getting a Tour Successfully',
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

 exports.updateAllTour = async (req, res) => {
    try {
     const tour = await updateAllTourService(req.body)
    
     res.status(200).json({
         status: 'success',
         message: 'Tour updated Successfully',
         data: tour,
     })
    } catch (error) {
     res.status(400).json({
         status: 'Fail',
         message: 'Tour updated Fail',
         error: error.message
     })
    } 
 }
 exports.trendingTour = viewCount,async (req, res) => {
    try {
     const tour = await trendingTourService(viewCount)
    
     res.status(200).json({
         status: 'success',
         message: 'Getting Top Trending Tour Successfully',
         data: tour,
     })
    } catch (error) {
     res.status(400).json({
         status: 'Fail',
         message: 'Fail The Trending Tour',
         error: error.message
     })
    } 
 }

 exports.cheapestTour = async (req, res) => {
    try {
     const tour = await cheapestTourService()
    
     res.status(200).json({
         status: 'success',
         message: 'Getting A cheapest Tour Successfully',
         data: tour,
     })
    } catch (error) {
     res.status(400).json({
         status: 'Fail',
         message: 'Fail The cheapest Tour',
         error: error.message
     })
    } 
 }