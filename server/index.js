const express = require("express");
const path = require("path");
const cors = require("cors");
const compression = require("compression");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
