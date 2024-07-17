import React, { useState, useEffect } from "react";
import axios from "axios";

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        "https://questionpaper-generator-server.onrender.com/api/get"
      );
      console.log(response);
      setQuestions(response.data);
    } catch (error) {
      console.error("There was an error fetching the questions!", error);
    }
  };

  const deleteQuestion = async (id) => {
    try {
      await axios.delete(
        `https://questionpaper-generator-server.onrender.com/api/delete/${id}`
      );
      setQuestions(questions.filter((question) => question._id !== id));
    } catch (error) {
      console.error("There was an error deleting the question!", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded px-8 py-6 mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Available Questions
      </h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-bold text-gray-700">
              Question
            </th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-bold text-gray-700">
              Subject
            </th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-bold text-gray-700">
              Topic
            </th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-bold text-gray-700">
              Difficulty
            </th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-bold text-gray-700">
              Marks
            </th>
            <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-bold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question._id}>
              <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                {question.question}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                {question.subject}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                {question.topic}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                {question.difficulty}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                {question.marks}
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => deleteQuestion(question._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsList;
