const express = require("express");
const router = express.Router();
const { TravelItem } = require("../DB/models");

router.get("/", async (req, res) => {
  const items = await TravelItem.find();
  res.json(items);
});

router.get("/:id", async (req, res) => {
  try {
    const item = await TravelItem.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Travel item not found" });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: "Error fetching travel item", error });
  }
});

router.post("/", async (req, res) => {
  try {
    const item = new TravelItem(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const item = await TravelItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) return res.status(404).json({ error: "Travel item not found" });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const deleted = await TravelItem.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: "Travel item not found" });
  res.status(204).send();
});

module.exports = router;
