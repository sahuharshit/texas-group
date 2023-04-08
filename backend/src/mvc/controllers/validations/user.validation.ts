import Joi from "joi";

export const subscribeUserToEventValidation = Joi.object({
  id: Joi.string().required(),
  event_id: Joi.string().required(),
});

export const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  mobile: Joi.string()
    .regex(/^\d{10}$/)
    .required(),
  password: Joi.string().required(),
});
