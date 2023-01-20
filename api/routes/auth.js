require('dotenv').config();

const router = require("express").Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js");
const { info } = require('console');
const jwt = require("jsonwebtoken");


//Register
router.post("/register", async (req, resp) => {

     try {
          const newuser = new User({
               username: req.body.username,
               email: req.body.email,
               password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
          });

          await newuser.save()
          const { password, createdAt, updatedAt, profilePic, isAdmin, ...info } = await newuser._doc
          resp.status(201).json(info)
          console.log(info);

     } catch (err) {
          resp.status(500).json(err)
     }
})


//login
router.post("/login", async (req, resp) => {
     try {
          const user = await User.findOne({ email: req.body.email })
          !user && resp.status(401).json("user does not present")

          console.log("continue execution")

          let bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);

          let originalPassword = bytes.toString(CryptoJS.enc.Utf8);


          if (originalPassword !== req.body.password) {
               console.log(originalPassword)
               resp.status(401).json("Wrong Password")
          }

          else {
               const accessToken = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.JWT_KEY, { expiresIn: "5d" })

               const { password, ...info } = user._doc;
               resp.status(200).json({ ...info, accessToken });
          }
     }
     catch (err) {
          console.log("executing catch")
          resp.status(500).json(err);
     }
})


module.exports = router;