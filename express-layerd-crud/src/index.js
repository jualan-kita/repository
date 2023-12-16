const express = require("express");
const dotenv = require("dotenv");
const allRoute = require("./routes");

const app = express();

dotenv.config();

const port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  res.send("selamat datang di api lord e-commerce");
});

app.use(cors());
app.use(express.json());
app.use(allRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
