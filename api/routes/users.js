require("dotenv").config();
const router = require("express").Router()
const User = require("../models/User")
const Cryptojs = require("crypto-js");
const verify = require('../verifyTokenJWT')

//UPDATE
router.put("/:id", verify, async (req, res) => {
     if (req.user.id === req.params.id || req.user.isAdmin) {
          if (req.body.password) {
               req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
          }
          try {
               const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
               res.status(200).json(updatedUser)
          }
          catch (err) {
               res.status(500).json(err)
          }
     }

     else {
          res.status(403).json("You can update only your account")
     }
})


//DELETE
router.delete("/:id", verify, async (req, res) => {
     if (req.user.id === req.params.id || req.user.isAdmin) {
          try {
               await User.findByIdAndDelete(req.params.id)
               res.status(200).json("User has been deleted...")
          }
          catch (err) {
               res.status(500).json(err)
          }
     }
     else {
          res.status(403).json("You are not allowed to delete")
     }
})


//GET
router.get("/find/:id", verify, async (req, res) => {
     
     try {
          const user = await User.findById(req.params.id, { $set: req.body }, { new: true })
          const {password, ...info} =user._doc
               res.status(200).json(info)
          }
          catch (err) {
               res.status(500).json(err)
          }
})

//GET ALL
router.get("/", verify, async (req, res) => {
     const query = req.query.new;
     if (req.user.isAdmin) {
          try {
               const users = query ? await User.find().limit(10) : await User.find();
               res.status(200).json(users)
          }
          catch (err) {
               res.status(500).json(err)
          }
     }
     else {
          res.status(403).json("You are not allowed to see other users details")
     }
})

//GET USER STATISTICS


module.exports = router