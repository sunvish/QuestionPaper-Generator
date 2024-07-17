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

export const getPaper = async (req, res) => {
  const {
    totalMarks,
    easyQuestionsPercent,
    mediumQuestionsPercent,
    hardQuestionsPercent,
  } = req.body;

  console.log(
    totalMarks,
    easyQuestionsPercent,
    mediumQuestionsPercent,
    hardQuestionsPercent
  );
  try {
    // Fetch all questions from the database
    const questions = await questionModel.find();

    // Filter questions based on difficulty
    const easyQuestions = questions.filter(
      (question) => question.difficulty === "Easy"
    );
    const mediumQuestions = questions.filter(
      (question) => question.difficulty === "Medium"
    );
    const hardQuestions = questions.filter(
      (question) => question.difficulty === "Hard"
    );

    let paper = [];
    let currentMarks = 0;
    // total marks based on difficulty
    let easyMarksTarget = Math.round((easyQuestionsPercent * totalMarks) / 100);
    let mediumMarksTarget = Math.round(
      (mediumQuestionsPercent * totalMarks) / 100
    );
    let hardMarksTarget = Math.round((hardQuestionsPercent * totalMarks) / 100);

    function addQuestions(questions, target) {
      while (questions.length > 0 && target > 0) {
        let question = questions.pop();
        if (currentMarks + question.marks <= totalMarks) {
          paper.push(question);
          currentMarks += question.marks;
          target -= question.marks;
        }
      }
    }

    addQuestions(easyQuestions, easyMarksTarget);
    addQuestions(mediumQuestions, mediumMarksTarget);
    addQuestions(hardQuestions, hardMarksTarget);

    res.status(200).json(paper);
  } catch (error) {
    console.error("Error generating paper:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteQuestion = async (req, res) => {
  const id = req.body.id;

  const response = await questionModel.findOneAndDelete({ id: id });
  res.status(200).json(response);
};
