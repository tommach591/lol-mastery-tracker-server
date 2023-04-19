const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const League = require("./routes/api/League");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send({ working: "Working..." }));
app.use("/api/League", League);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server started.`);
});
