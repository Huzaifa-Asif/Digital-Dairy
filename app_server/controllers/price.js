var price =require('../models/price.js');

// Get Service Categories
module.exports.getPrice = (callback, limit) => {
	price.find(callback).limit(limit);
}

// Update serviceCategory
module.exports.updatePrice = (id, priceForm, options, callback) => {
    var query = {_id: id};
    price.findOneAndUpdate(query, priceForm, options, callback);
}

