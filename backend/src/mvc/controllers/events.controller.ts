import { Request, Response } from "express";

const AllEvents = (req: Request, res: Response) => {
  return res.send("hello world");
};

export { AllEvents };
