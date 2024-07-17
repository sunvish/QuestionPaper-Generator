import express from "express";
import {
  createQuestion,
  getPaper,
  getQuestions,
} from "../controllers/questionsController.js";

const questionRouter = express.Router();

questionRouter.post("/create", createQuestion);
questionRouter.get("/get", getQuestions);
questionRouter.post("/getPaper",getPaper)

export default questionRouter;
