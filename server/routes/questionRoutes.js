import express from "express";
import {
  createQuestion,
  deleteQuestion,
  getPaper,
  getQuestions,
} from "../controllers/questionsController.js";

const questionRouter = express.Router();

questionRouter.post("/create", createQuestion);
questionRouter.get("/get", getQuestions);
questionRouter.post("/getPaper", getPaper);
questionRouter.delete("/delete/:id", deleteQuestion);

export default questionRouter;
