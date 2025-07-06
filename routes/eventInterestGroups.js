const express = require("express");
const router = express.Router();
const { EventInterestGroup } = require("../DB/models");

// GET all Event/Interest Group items
router.get("/", async (req, res) => {
  try {
    const items = await EventInterestGroup.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch items" });
  }
});

// GET a single item by ID
router.get("/:id", async (req, res) => {
  try {
    const item = await EventInterestGroup.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: "Invalid ID format" });
  }
});

// POST a new Event/Interest Group item
router.post("/", async (req, res) => {
  try {
    const item = new EventInterestGroup(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT to update an existing item by ID
router.put("/:id", async (req, res) => {
  try {
    const updated = await EventInterestGroup.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: "Item not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE an item by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await EventInterestGroup.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Invalid ID format" });
  }
});

module.exports = router;
