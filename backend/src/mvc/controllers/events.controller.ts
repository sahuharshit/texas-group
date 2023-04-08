import { Request, Response } from "express";
import { Events } from "../models";
import Joi, { ValidationError } from "joi";

const getAllEvents = async (req: Request, res: Response) => {
  const getAllEvents = await Events.find().lean().exec();
  res.send(getAllEvents).end();
};

// can put validations away from the logic
const createEventSchemaJoiValidation = Joi.object({
  event_name: Joi.string().required(),
  event_location: Joi.string().required(),
  event_date: Joi.date().required(),
});

const createEvent = async (req: Request, res: Response) => {
  try {
    // check for validation
    await createEventSchemaJoiValidation.validateAsync(req.body);

    // create new object
    const object = new Events(req.body);

    // save the object in the db
    const result = await object.save();

    // send result back to the API
    res.send(result);
  } catch (err) {
    // if we catch error of type Joi Validation
    if (err instanceof ValidationError) {
      res.status(400).json({ error: err.message });
    } else {
      // throw a common error
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

const deleteEvent = async (req: Request, res: Response) => {
  try {
    const eventId = req.params.id;
    const event = await Events.deleteOne(eventId);

    if (event) {
      res.status(200).json({ message: "Event deleted successfully" });
    } else {
      res.status(404).json({ error: "Event not found" });
    }
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllEvents, createEvent, deleteEvent };
