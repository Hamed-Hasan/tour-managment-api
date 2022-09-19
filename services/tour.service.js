const Tour = require("../models/tour")


exports.createTourService = async (data) => {
const tour = await Tour.create(data);
return tour
}
exports.getTourServices = async (filters, queries) => {
const tour = await Tour
.find(filters)
.select(queries.fields)
.sort(queries.sortBy)
return tour;
}