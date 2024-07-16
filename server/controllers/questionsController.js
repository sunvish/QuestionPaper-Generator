import questionModel from "../models/questionSchema.js";

export const createQuestion = async (req, res) => {
  try {
    const question = new questionModel(req.body);
    await question.save();
    res.status(201).send(question);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getQuestions = async (req, res) => {
  try {
    const questions = await questionModel.find();
    res.status(200).send(questions);
  } catch (error) {
    res.status(500).send(error);
  }
};
