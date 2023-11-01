const express = require("express");
const oemRouter = express.Router();
const { OemSpecsModel } = require("../models/oemSpecsModel");

// Route to search for OEM specs by model name and year
oemRouter.get("/oemspecs", async (req, res) => {
  const { modelName, year } = req.query;

  try {
    const specs = await OemSpecsModel.find({ modelName, year });
    res.json(specs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = oemRouter;
