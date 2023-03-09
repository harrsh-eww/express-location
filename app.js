const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const location = require("./model");

const app = express();

app.use(cors());
app.use(express.json());

connectDB().then(() => {
  app.listen(8080, () => {
    console.log("Server is running on port 8080...");
  });

  app.get("/", (req, res) => {
    return res.json({
      message: "Server is up and running!!",
    });
  });

  app.post("/", async function (req, res) {
    try {
      const { data, latitude, longitude } = req.body;

      const locationData = location.create({
        data,
        latitude,
        longitude,
      });

      await locationData.save;

      return res.json({
        message: "Server is up and running!!",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  });
});
