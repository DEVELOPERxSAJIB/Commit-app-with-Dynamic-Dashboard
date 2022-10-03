const path = require('path');
const { readFileSync } = require('fs');


// Slider controllers
const sliderPage = (req, res) => {

    // all data
    const products = JSON.parse(readFileSync(path.join(__dirname, '../db/product.json')));
    
    res.render('slider/sliderMain')
}











// module exports 
module.exports = {
    sliderPage
}