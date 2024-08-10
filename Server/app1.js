const express = require("express");
const path = require("path");
const fileUpload = require("express-fileupload");
const participantsRoutes = require("./routes/participants");
const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
var bodyparser = require("body-parser");
app.use(bodyparser.json({ limit: "50mb" }));
cloudinary.config({
  cloud_name: "dj67t55bx",
  api_key: "534538557599833",
  api_secret: "6IHIWsQkCmYi9kgTXNQrfNiMpCA",
  secure: true,
});

app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
// MongoDB connection
mongoose.connect(
  "mongodb+srv://knowhow24:knowhow%40bvmtpc@knowhow24.jmz3jlg.mongodb.net/users?retryWrites=true&w=majority"
);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/", participantsRoutes); // Change to participantsRoutes

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
