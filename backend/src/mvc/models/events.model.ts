import mongoose, { Schema } from "mongoose";
import { ISchemaType } from "@/interfaces/interface";
import { CreateSchema } from "../../helpers/createSchema";

interface IEventSchema {
  event_name: string;
  event_location: string;
  event_date: string;
}

const schema = CreateSchema({
  event_name: { type: String },
  event_location: { type: String, unique: true, lowercase: true },
  event_date: { type: String, unique: true },
});

module.exports = mongoose.model("events", schema);
