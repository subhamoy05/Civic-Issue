const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    description: { type: String, required: true },
    location: {
      lat: { type: Number },
      lng: { type: Number },
    },
    image: { type: String },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Issue", IssueSchema);
