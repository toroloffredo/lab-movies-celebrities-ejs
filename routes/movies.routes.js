// starter code in both routes/celebrities.routes.js and routes/movies.routes.js


const celebModel = require('../models/Movie.model');
const router = require('express').Router()

// all your routes here
router.get('/',(req,res) => {
    res.send("here's the movie route");
})


router.get('/movies/create', (req,res) => {
    res.render('movies/new-movie')
})





router.post('movies/create', async (req,res) =>{
    const {title, genre, plot, cast} = req.body
    console.log(req.body)

    try{
        const newMovie =await movieModel.create(data)
        console.log(newMovie)
        res.redirect(`/movies/${newMovie}`)


    }catch(err) {
        res.render('movies/create')
        console.log('Error in celeb route', err);
        }


})

router.get('movies', async (req,res) => {
    
    try {
    const allMovies = await movieModel.find()
    res.render('celebrities/celebrities.ejs', {allMovies})



    } catch(err) {
        console.log('Error in celeb route', err);
        }
})


module.exports = router