const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const MONGODB_URL = process.env.MONGODB_URL;
const bodyParser = require("body-parser");
const cors = require("cors");

const { Fund } = require("./models/Fund");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// get all funds
// app.get("/fund", async (req, res) => {
//   try {
//     const fund = await Fund.find({}, { _id: 1, fundName: 1 })
//       .distinct("fundName")
//       .sort({
//         fundName: 1,
//       });
//     res.json({ data: fund });
//   } catch {
//     res.status(400);
//   }
// });

app.get("/fund", async (req, res) => {
  try {
    const fund = await Fund.find({}, { fundName: 1, _id: 1 }).distinct(
      "fundName",
      function (err, fund) {
        res.json({
          data: fund,
        });
      }
    );
  } catch {
    res.status(400);
  }
});

// get fund by name
// app.get("/fund/:fundName", (req, res) => {
//   console.log(req.params.fundName);
//   Fund.find(
//     {
//       fundName: req.params.fundName,
//     },
//     function (err, fund) {
//       if (err) return err;
//       res.send({
//         data: fund,
//       });
//     }
//   );
// });

app.get("/fund/:fundName", async (req, res) => {
  console.log(req.params.fundName);
  try {
    const fund = await Fund.findOne({ fundName: req.params.fundName });
    res.json({
      fund,
    });
  } catch (err) {
    console.log(err);
    res.status(400);
  }
});

//search fund
app.post("/fund/search", async (req, res) => {
  console.log(req.body.query);
  try {
    const results = await Fund.find(
      {
        $text: {
          $search: req.body.query,
        },
      },
      { fundName: 1 }
      // fundName: { $regex: req.body.query, $options: "i" },
    ).distinct("fundName");

    console.log(results);
    res.status(201).json({ results });
  } catch (err) {
    console.log(err);
    res.status(400);
  }
});

mongoose.connect(MONGODB_URL);
app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
