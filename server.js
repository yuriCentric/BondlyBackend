const express = require("express");
const cors = require("cors");
require("./DB");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

// Route imports
const itemsRoutes = require("./routes/items");
const travelRoutes = require("./routes/travel");
const localRecommendationsRoutes = require("./routes/localRecommendations");
const eventInterestGroupsRoutes = require("./routes/eventInterestGroups");
const skillSwapMentorshipRoutes = require("./routes/skillSwapMentorship");

// Use routes
app.use("/items", itemsRoutes);
app.use("/travel-items", travelRoutes);
app.use("/local-recommendations", localRecommendationsRoutes);
app.use("/event-interest-groups", eventInterestGroupsRoutes);
app.use("/skill-swap-mentorship", skillSwapMentorshipRoutes);

// Start server
app.listen(port, () => {
  console.log(`🚀 Bondly backend server running at http://localhost:${port}`);
});
