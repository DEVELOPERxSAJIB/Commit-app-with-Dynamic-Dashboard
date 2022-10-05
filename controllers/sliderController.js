const path = require('path');
const { readFileSync, writeFileSync } = require('fs');
const { json } = require('express');


// Slider controllers
const sliderPage = (req, res) => {

    // all data
    const sliders = JSON.parse(readFileSync(path.join(__dirname, '../db/mainSlider.json')));
    
    res.render('slider/sliderMain', {
        sliders
    });

    console.log(sliders);

}

// create slider page controlers
const createslider = ( req, res ) => {

    res.render('slider/createSlider')

}


// slider data store controlers
const sliderDataStore = (req, res) => {

    // all data
    const sliders = JSON.parse(readFileSync(path.join(__dirname, '../db/mainSlider.json')));

    // distructure data from slider from requested body
    const { title, desc, photo } = req.body

    // find id
    let last_id = 1;
    if(sliders.length > 0) {
        last_id = sliders[sliders.length - 1].id + 1;
    }

    // push slider data into json
    sliders.push({
        id : last_id,
        title : title,
        desc : desc,
        photo : req.file.filename
    })

    // updata all data into json db
    writeFileSync(path.join(__dirname, '../db/mainSlider.json'), JSON.stringify(sliders))

    // redirect
    res.redirect('/admin/slider');

 }











// module exports 
module.exports = {
    sliderPage,
    createslider,
    sliderDataStore
}