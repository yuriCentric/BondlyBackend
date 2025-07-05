const express = require("express");
const router = express.Router();
const { SkillSwapMentorship } = require("../DB/models");

// Get all skill swap mentorship items
router.get("/", async (req, res) => {
  const items = await SkillSwapMentorship.find();
  res.json(items);
});

// Get a single skill swap mentorship item by id
router.get("/:id", async (req, res) => {
  try {
    const item = await SkillSwapMentorship.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Create a new skill swap mentorship item
router.post("/", async (req, res) => {
  try {
    const item = new SkillSwapMentorship(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    console.error("Error saving skill swap item:", err);
    res.status(400).json({ error: err.message });
  }
});

// Update an existing skill swap mentorship item by id
router.put("/:id", async (req, res) => {
  try {
    const item = await SkillSwapMentorship.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a skill swap mentorship item by id
router.delete("/:id", async (req, res) => {
  try {
    const item = await SkillSwapMentorship.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
