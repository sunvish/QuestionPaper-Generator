import express from "express";
import {
  createQuestion,
  getQuestions,
} from "../controllers/questionsController.js";

const questionRouter = express.Router();

questionRouter.post("/create", createQuestion);
questionRouter.get("/get", getQuestions);

export default questionRouter;
