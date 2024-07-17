                    **********Overview********

This repository contains a comprehensive MERN stack application for generating question papers based on user-defined criteria. The frontend is developed using React, providing an intuitive user interface for inputting paper requirements. Communication with the backend API, built with Node.js and MongoDB.

                        ********STACK********

Frontend: React
Backend: Node.js, Express
Database: MongoDB with Mongoose for schema-based modeling

Backend (Node.js)

                        *********ENDPOINTS********

Create Question: POST /api/create

- Creates a new question based on the provided JSON schema.

Get All Questions: GET /api/get

- Retrieves all questions currently stored in the database.

Generate Question Paper: POST /api/getpaper

- Generates a question paper based on user-specified parameters: totalMarks, easyQuestionsPercent, mediumQuestionsPercent, hardQuestionsPercent.
- Retrieves questions from the database, filters them based on difficulty, and calculates the required number of questions for each difficulty to match the specified percentage distribution of total marks.

Database Schema: Questions are stored in MongoDB using Mongoose with a schema defined to include fields such as question, subject, topic, difficulty, and marks.

        ************Paper Generation Logic*************

- The getPaper endpoint dynamically fetches questions from the database and filters them based on their difficulty level. It computes the necessary number of questions for each difficulty to align with the specified percentage distribution of total marks. Even if there are insufficient questions in the database, it displays the available questions with all relevant data.

                ********Usage********

Adding Questions:

Navigate to the homepage and fill in all fields to add a question. Click on "Add Question" to add it to the database.
Viewing Added Questions:

Click on "Generate All Questions" to view all questions currently added to the database.
Creating Question Paper:

Fill in the required fields (total marks, percentage distribution of easy, medium, and hard questions) and click on "Create Paper" to generate a question paper based on the specified criteria. The generated paper will be displayed below.

                *********NOTES********

Assumptions:

- All easy questions have the same marks, as do medium and hard questions. Easy questions have 5 marks specified, medium questions have 10 marks, and hard questions have 15 marks.
