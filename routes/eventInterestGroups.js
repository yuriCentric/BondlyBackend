const express = require("express");
const router = express.Router();
const { EventInterestGroup } = require("../DB/models");

router.get("/", async (req, res) => {
  const items = await EventInterestGroup.find();
  res.json(items);
});

router.post("/", async (req, res) => {
  try {
    const item = new EventInterestGroup(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
