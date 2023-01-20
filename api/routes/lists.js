require("dotenv").config();
const router = require("express").Router()
const List = require("../models/List")
const verify = require('../verifyTokenJWT')



//Create the list
router.post("/", verify, async (req, res) => {
     if (req.user.isAdmin) {
          const newList = new List(req.body);
          try {
               const savedList = await newList.save()
               res.status(201).json(savedList)
          } catch (err) { res.status(500).json(err) }
     }
     else {
          res.status(403).json("You care not allowed!!!")
     }
})


//Delete the list
router.delete("/:id", verify, async (req, res) => {
     if (req.user.isAdmin) {
          try {
               await List.findByIdAndDelete(req.params.id)
               res.status(201).json("deleted successfuly")
          } catch (err) { res.status(500).json(err) }
     }
     else {
          res.status(403).json("You care not allowed!!!")
     }
})

// router.post("/:id", async (req, resp) => {
//      try {
//           const movie = await List.findById(req.params.id);
//           console.log(movie)
//           resp.status(200).json(movie);
//      } catch (err) {
//           resp.status(500).json(err);
//      }
// })

//get the list
// add verification
router.get("/", async (req, resp) => {
     const typeQuery = req.query.type;
     const genreQuery = req.query.genre;
     let list = []
     try {
          if (typeQuery) {
               if (genreQuery) {
                    list = await List.aggregate([
                         { $sample: { size: 10 } },
                         { $match: { type: typeQuery, genre: genreQuery } },
                    ]);
               }
               else {
                    list = await List.aggregate([
                         { $sample: { size: 10 } },
                         { $match: { type: typeQuery } },
                    ]);
               }
          }
          else {
               list = await List.aggregate([{ $sample: { size: 10 } }])

          }
          resp.status(200).json(list)
     } catch (err) {
          resp.status(500).json(err)
     }
})

module.exports = router