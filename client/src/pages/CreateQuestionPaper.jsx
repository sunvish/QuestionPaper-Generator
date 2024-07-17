import React, { useState } from "react";

const CreateQuestionPaper = () => {
  const [totalMarks, setTotalMarks] = useState("");
  const [easyPercentage, setEasyPercentage] = useState("");
  const [mediumPercentage, setMediumPercentage] = useState("");
  const [hardPercentage, setHardPercentage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      totalMarks,
      easyPercentage,
      mediumPercentage,
      hardPercentage,
    };

    console.log(formData);

    
    // setTotalMarks("");
    // setEasyPercentage("");
    // setMediumPercentage("");
    // setHardPercentage("");
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
            value={easyPercentage}
            onChange={(e) => setEasyPercentage(e.target.value)}
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
            value={mediumPercentage}
            onChange={(e) => setMediumPercentage(e.target.value)}
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
            value={hardPercentage}
            onChange={(e) => setHardPercentage(e.target.value)}
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
    </div>
  );
};

export default CreateQuestionPaper;
