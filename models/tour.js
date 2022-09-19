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
    }
})