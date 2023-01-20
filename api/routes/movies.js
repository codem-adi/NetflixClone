require("dotenv").config();
const router = require("express").Router()
const { count } = require("console");
const Movie = require("../models/Movie")
const verify = require('../verifyTokenJWT')



//Create the movie
router.post("/", verify, async (req, res) => {
     if (req.user.isAdmin) {
          const newMovie = new Movie(req.body);
          try {
               const savedMovie = await newMovie.save()
               res.status(201).json(savedMovie)
          } catch (err) { res.status(500).json(err) }
     }
     else {
          res.status(403).json("You can't do this")
     }
})

//Get the movie
//add verify


router.get("/find/:id", async (req, res) => {

     try {
          
          const myMovie = await Movie.findById(req.params.id);
          res.status(200).json(myMovie)
          
     } catch (err) { res.status(500).json(err) }
})


//Update the movie
router.put("/:id", verify, async (req, res) => {
     if (req.user.isAdmin) {
          try {
               const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
               res.status(200).json(updatedMovie)
          } catch (err) { res.status(500).json(err) }
     }
     else {
          res.status(403).json("You can't do this")
     }
})

//Delete the movie
router.delete("/:id", verify, async (req, res) => {
     if (req.user.isAdmin) {
          try {
               await Movie.findByIdAndDelete(req.id);
               res.status(201).json("Movie deleted successfuly")
          } catch (err) { res.status(500).json(err) }
     }
     else {
          res.status(403).json("You can't do this")
     }
})


//Get random movie
router.get("/random", verify, async (req, res) => {
     const type = req.query.type;
     let movie;
     try {
          if (type === "series") {
               movie = await Movie.aggregate([
                    { $match: { isSeries: true } },
                    { $sample: { size: 1 } },
               ]);
          } else {
               movie = await Movie.aggregate([
                    { $match: { isSeries: false } },
                    { $sample: { size: 1 } },
               ]);
          }
          res.status(200).json(movie);
     } catch (err) { res.status(500).json(err) }

})


//Get all
router.get("/all", verify, async (req, res) => {

     if (req.user.isAdmin) {

          const type = req.query.type;

          try {
               let movie = await Movie.find()
               res.status(200).json(movie.reverse());
          } catch (err) { res.status(500).json(err) }
     }
     else {
          res.status(500).json("you are not the right person")
     }

})


module.exports = router