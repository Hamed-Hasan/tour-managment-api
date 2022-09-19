const Tour = require("../models/tour")


exports.createTourService = async (data) => {
const tour = await Tour.create(data);
return tour
}
exports.getTourServices = async (query) => {
const tour = await Tour.find(query);
return tour;
}