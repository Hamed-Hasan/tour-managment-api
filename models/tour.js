const mongoose = require('mongoose');

// tour schema
const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Provide a name for this tour'],
        trim: true,
        unique: [true, 'Name must be unique'],
        minLength: [3, 'Name must be at least 3 characters'],
        maxLength: [100, 'Name is too large'],
    },
    description: {
        type: String,
        required: true,
        min: [3, 'description must be at least 3 characters']
    },
    price: {
        type: Number,
        required: true,
        unique: [true, 'Price must be unique'],
        min: [0, 'price can"t be negative'],
        validate: {
            validator: (values) => {
                const isInteger = Number.isInteger(values);
                if(isInteger) {
                    return true;
                }else{
                    return false;
                }
            }
        },
        message: 'Price must be an integer'
    },
    // image: {
    //     type: String,
    //     required: true,
    // },
    status: {
        type: String,
        required: true,
        enum: {
            values: ['Independent-Tours','Hosted-Tours','Freedom-Tours'],
            message: 'status must be values'
        }
    }
}, {
    timestamps: true,
})

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;