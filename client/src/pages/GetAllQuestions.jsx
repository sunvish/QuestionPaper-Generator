import React, { useState, useEffect } from "react";
import axios from "axios";

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get("http://localhost:3888/api/get");
      console.log(response);
      setQuestions(response.data);
    } catch (error) {
      console.error("There was an error fetching the questions!", error);
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsList;
