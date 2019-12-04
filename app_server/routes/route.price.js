var express = require('express');
var router = express.Router();
var price = require('../controllers/price.js');

// Get Service Category
router.get('/get_price', function (req, res) {
    price.getPrice(function (err, result) {
        if (err)
            return res.status(500).json({
                Message: "Error in Connecting to DB",
                status: false
            });

        return res.json(result);

    });

});


//Update Service Category
router.patch('/update_price/:id', function (req, res) {
    var priceForm = req.body;
    var id = req.params.id;
    price.updatePrice(id, priceForm, {
        new: true
    }, function (err, price) {
        if (err)
            return res.status(500).json({
                Message: "Error in Connecting to DB",
                status: false
            });
        var result = price.toObject();
        result.status = true;
        return res.json(result);
    });

});




module.exports = router;
