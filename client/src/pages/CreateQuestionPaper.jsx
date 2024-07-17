import React, { useState } from "react";
import axios from "axios";

const CreateQuestionPaper = () => {
  const [totalMarks, setTotalMarks] = useState("");
  const [easyQuestionsPercent, seteasyQuestionsPercent] = useState("");
  const [mediumQuestionsPercent, setmediumQuestionsPercent] = useState("");
  const [hardQuestionsPercent, sethardQuestionsPercent] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      totalMarks,
      easyQuestionsPercent,
      mediumQuestionsPercent,
      hardQuestionsPercent,
    };

    try {
      const response = await axios.post(
        "http://localhost:3888/api/getpaper",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResponse(response.data);
    } catch (error) {
      console.error("There was an error creating the paper!", error);
      setResponse(null);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 py-6 mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Create Question Paper
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="totalMarks"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Total Marks:
          </label>
          <input
            type="number"
            id="totalMarks"
            name="totalMarks"
            placeholder="Total marks of the paper"
            value={totalMarks}
            onChange={(e) => setTotalMarks(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="easyPercentage"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Easy Percentage:
          </label>
          <input
            type="number"
            id="easyPercentage"
            name="easyPercentage"
            placeholder="Percentage of easy questions"
            value={easyQuestionsPercent}
            onChange={(e) => seteasyQuestionsPercent(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mediumPercentage"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Medium Percentage:
          </label>
          <input
            type="number"
            id="mediumPercentage"
            name="mediumPercentage"
            placeholder="Percentage of medium questions"
            value={mediumQuestionsPercent}
            onChange={(e) => setmediumQuestionsPercent(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="hardPercentage"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Hard Percentage:
          </label>
          <input
            type="number"
            id="hardPercentage"
            name="hardPercentage"
            placeholder="Percentage of hard questions"
            value={hardQuestionsPercent}
            onChange={(e) => sethardQuestionsPercent(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Paper
          </button>
        </div>
      </form>
      <p className="mt-6 text-sm text-gray-700">
        Note: If the total marks and the percentages do not align with the
        available questions, the generated paper may not fully utilize the total
        marks. For example, if you input 10 as total marks and 20%, 50%, and 30%
        for the difficulty percentages, you may only receive questions summing
        up to the closest possible mark based on the available questions.
      </p>
      {response && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Generated Paper</h2>
          <ul>
            {response.map((question, index) => (
              <li key={index} className="mb-2">
                <strong>Question:</strong> {question.question}
                <br />
                <strong>Subject:</strong> {question.subject}
                <br />
                <strong>Topic:</strong> {question.topic}
                <br />
                <strong>Difficulty:</strong> {question.difficulty}
                <br />
                <strong>Marks:</strong> {question.marks}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreateQuestionPaper;
