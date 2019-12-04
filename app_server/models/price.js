const mongoose = require('mongoose');

const schema = mongoose.Schema;

// Service Category Schema

const priceSchema = new schema({
    milk:{
        type:Number
    },
    yogurt:{
        type:Number
    },
    ghee:{
        type:Number
    },
    butter:{
        type:Number
    }
})


const price= module.exports = mongoose.model('price',priceSchema);