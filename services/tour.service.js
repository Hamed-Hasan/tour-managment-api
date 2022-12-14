const viewCount = require("../middleware/viewCount");
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

exports.updateAllTourService = async (data) => {
    const tours = [];
    data.ids.forEach(tour => {
        tours.push(Tour.updateOne({_id: tour.id}, tour.data, {runValidators:true}));
    })
    const tour = await Promise.all(tours);
    console.log(tour)
    return tour
    }

    exports.trendingTourService =  async (viewCount) => {
        const tour = await Tour.find({viewCount:{$exists:true}, count})
        return tour
        }

exports.cheapestTourService = async (query) => {
    const tour = await Tour.find({price: {$lt: 118}})
    return tour
    }
