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
.skip(queries.page)
.limit(queries.limit)

return tour;
}

exports.getATourService = async (id) => {
    const tour = await Tour.findOne(id);
    return tour
    }