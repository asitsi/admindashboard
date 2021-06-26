require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const DATABASE =
  "mongodb+srv://asitsingh18:Asit@1234@cluster0.pp0qe.mongodb.net/adminDashboard?retryWrites=true&w=majority";

//My routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
//DB Connection
mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => console.log(err, "hello"));

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
//PORT
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
