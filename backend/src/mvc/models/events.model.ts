import mongoose, { Schema } from "mongoose";
import { CreateSchema } from "../../helpers/createSchema";

const schema = CreateSchema({
  event_name: { type: String },
  event_location: { type: String, unique: true, lowercase: true },
  event_date: { type: String, unique: true },
});

module.exports = mongoose.model("events", schema);
