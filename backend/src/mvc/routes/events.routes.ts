import express from "express";
import { eventController } from "../controllers";
import { Routes } from "./routesStrings";

const router = express.Router();

router.get("/", [], eventController.AllEvents);
// router.post(Routes.update, [], userController.UserUpdate);

export default router;
