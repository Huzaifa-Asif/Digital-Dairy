const mongoose = require('mongoose');

const schema = mongoose.Schema;

// Booking Details Schema

const bookingDetailsSchema = new schema({
    state:{
      type:String,
      default:"pending"
    },
    paymentStatus:{
        type:String,
        default:"pending"
    },
    productQuantity:{
        type:String
    },
    productName:{
        type:String
    },
    orderNote:{
        type:String
    },
    orderLat:{
        type:Number
    },
    orderLon:{
        type:Number
    },
    date:{
        type:String
    },
    time:{
        type:String
    },
    serviceProviderEmail:{
        type:String
    },
    serviceProviderName:{
        type:String
    },
    serviceProviderNumber:{
        type:String
    },
    customerEmail:{
        type:String
    },
    customerName:{
        type:String
    },
    customerNumber:{
        type:String
    }
})


const bookingDetails= module.exports = mongoose.model('BookingDetails',bookingDetailsSchema);
