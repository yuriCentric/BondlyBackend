const express = require("express");
const { Item } = require("../DB/models");
const router = express.Router();

router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

router.post("/", async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const deleted = await Item.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: "Item not found" });
  res.status(204).send();
});

module.exports = router;
