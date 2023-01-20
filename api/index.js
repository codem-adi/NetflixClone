const exp = require('express');
const app = exp();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const movieRoute = require("./routes/movies")
const listRoute = require("./routes/lists")
const cors = require("cors")


dotenv.config();
mongoose.set('strictQuery', false);

app.use(exp.json())
app.use(cors({ origin: ['http://localhost:3000', "http://127.0.0.1:3000/"] }))

mongoose.connect(process.env.Mongo_URL, { useNewUrlParser: true });

mongoose.connection.useDb('Netflix'); // Switching happens here..




app.get("/api", (req, resp) => { resp.send("server is running") })


app.use("/api/auth", authRoute)
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/list", listRoute);

app.listen(process.env.PORT || 4000, () => { console.log("Server listening on port ", process.env.PORT) })