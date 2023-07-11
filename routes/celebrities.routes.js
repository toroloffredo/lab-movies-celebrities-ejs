const celebModel = require('../models/Celebrity.model');

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// all your routes here
router.get('/',(req,res) => {
    res.send("Here's the Celeb route");
})


// get update
router.get('/celebrities/create', (req,res) => {
    res.render('celebrities/new-celebrity')
})


// get one
router.post('/celebrities/create', async (req,res) => {
    const {name, occupation, catchPhrase} = req.body
    console.log(req.body)

    try {
        const newCeleb = await celebModel.create(data)
        console.log(newCeleb)
        res.redirect(`/celebrities/${newCeleb}`)
             
    } catch(err) {
        res.render('celebrities/create')
        console.log('Error in celeb route', err);
        }
    
    //res.render('/celebrities/create')
})

// post updated
router.get('celebrities', async (req,res) => {
    
    try {
    const allCelebrities = await celebModel.find()
    res.render('celebrities/celebrities.ejs', {allCelebrities})



    } catch(err) {
        console.log('Error in celeb route', err);
        }
})


//post delete


module.exports = router