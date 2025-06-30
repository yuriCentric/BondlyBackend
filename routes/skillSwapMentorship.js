const express = require("express");
const router = express.Router();
const { SkillSwapMentorship } = require("../DB/models");

router.get("/", async (req, res) => {
  const items = await SkillSwapMentorship.find();
  res.json(items);
});

router.post("/", async (req, res) => {
  try {
    const item = new SkillSwapMentorship(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
