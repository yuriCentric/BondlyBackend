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
const localRecommendationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    pics: [String],
    address: String,
    city: String,
    category: String,
  },
  { timestamps: true }
);

const EventInterestSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    date: String,
    time: String,
    location: String,
    department: String,
    audience: String,
    maxParticipants: String,
    category: {
      type: String,
      enum: ["Event", "Interest Group"],
      required: true,
    },
    postedBy: String,
  },
  { timestamps: true }
);

// New SkillSwapMentorship Schema
const skillSwapMentorshipSchema = new mongoose.Schema(
  {
    skillName: { type: String, required: true },
    skillType: { type: [String], required: true }, // array of strings for multi-select
    intent: {
      type: String,
      enum: ["Offer mentorship", "Learn this skill", "Both"],
      required: true,
    },
    proficiencyLevel: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      required: true,
    },
    description: String,
  },
  { timestamps: true }
);

// Export all models
module.exports = {
  Item: mongoose.model("Item", itemSchema),
  TravelItem: mongoose.model("TravelItem", travelItemSchema),
  LocalRecommendation: mongoose.model(
    "LocalRecommendation",
    localRecommendationSchema
  ),
  EventInterestGroup: mongoose.model("EventInterestGroup", EventInterestSchema),
  SkillSwapMentorship: mongoose.model(
    "SkillSwapMentorship",
    skillSwapMentorshipSchema
  ),
};
