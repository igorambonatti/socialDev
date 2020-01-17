const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const app = express();

const dbString =
  "mongodb+srv://social:social123@cluster0-7kfvm.mongodb.net/data?retryWrites=true&w=majority";

mongoose.connect(dbString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use("/", routes);
app.listen(3333);
