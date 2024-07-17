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

export const getPaper = async (req,res)=>{
    const {totalMarks,easyPercent,mediumPercent,hardPercent} = req.body
    const totalEasyMarks = Math.floor((easyPercent/100)*totalMarks)
    const totalMediumMarks = Math.floor((mediumPercent/100)*totalMarks)
    const totalHardMarks = Math.floor((hardPercent/100)*totalMarks)

    const questions = await questionModel.find();
    questions.forEach((question)=>{
      if(question.difficulty=="Easy"){

      }
      else if(question.difficulty=="Medium"){

      }else if(question.difficulty=="Hard"){
        
      }
    })
}


