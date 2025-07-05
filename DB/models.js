const mongoose = require("mongoose");

// Item Schema
const itemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: Number,
    pics: [String],
    address: String,
    city: String,
    category: String,
  },
  { timestamps: true }
);

// Travel Item Schema
const travelItemSchema = new mongoose.Schema(
  {
    travelFrom: String,
    travelTo: String,
    date: Date,
    numberOfPassengers: Number,
  },
  { timestamps: true }
);

// Simple Post Schema for common use
const simplePostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
  },
  { timestamps: true }
);

// New SkillSwapMentorship Schema
const skillSwapMentorshipSchema = new mongoose.Schema(
  {
    skillName: { type: String, required: true },
    skillType: { type: [String], required: true }, // array of strings for multi-select
    intent: { type: String, enum: ["Offer mentorship", "Learn this skill", "Both"], required: true },
    proficiencyLevel: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], required: true },
    description: String,
  },
  { timestamps: true }
);

// Export all models
module.exports = {
  Item: mongoose.model("Item", itemSchema),
  TravelItem: mongoose.model("TravelItem", travelItemSchema),
  LocalRecommendation: mongoose.model("LocalRecommendation", simplePostSchema),
  EventInterestGroup: mongoose.model("EventInterestGroup", simplePostSchema),
  SkillSwapMentorship: mongoose.model("SkillSwapMentorship", skillSwapMentorshipSchema),
};
