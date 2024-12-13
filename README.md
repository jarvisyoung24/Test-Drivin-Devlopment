Tech Quiz Test Suite
--------------------


Description
------------
The Tech Quiz Test Suite is designed to enhance the functionality and reliability of a fully functioning Tech Quiz application using Cypress for both component and end-to-end testing. The application, built with the MERN stack (MongoDB, Express.js, React, Node.js), allows users to take a quiz of ten random tech questions and view their final score. This project will add automated testing to ensure that the quiz functions as expected in all scenarios, providing a more reliable user experience.

Motivation
This project emphasizes the importance of automated testing in modern web applications. By adding Cypress tests to the Tech Quiz application, we ensure that the app works as expected under various conditions, both from a component and an end-to-end perspective. This not only helps with maintaining the application but also allows for faster iteration and deployment while ensuring consistency and robustness.

User Story
------------
AS AN aspiring developer
I WANT to take a tech quiz
SO THAT I can test my knowledge and improve my skills

Acceptance Criteria
---------------------
GIVEN I am taking a tech quiz,
WHEN I click the start button,
THEN the quiz starts, and I am presented with a question.
WHEN I answer a question,
THEN I am presented with another question.
WHEN all questions are answered,
THEN the quiz is over.
WHEN the quiz is over,
THEN I can view my score.
WHEN the quiz is over,
THEN I can start a new quiz.

Technologies Used
-------------------
Cypress (for component and end-to-end testing)
React (for the front-end of the quiz)
MongoDB (for the database)
Node.js (for the back-end API)
Express.js (for the server application)
Getting Started
Download and Set Up

Download the starter code files and unzip them.
Create a new repository with the starter code.
Install Dependencies

Install the necessary dependencies for the project, including Cypress for testing.
bash
Copy code
npm install
Directory Structure
The directory structure should look like the following:

bash
Copy code
.
├── client/                 // The client application
├── cypress/                // Folder for Cypress tests
    ├── component/          // Component tests for the Quiz component
        └── Quiz.cy.jsx     // Component tests for the Quiz component
    ├── e2e/                // End-to-end tests for the Tech Quiz
        └── quiz.cy.js      // End-to-end tests for the Tech Quiz
    ├── fixtures/           // Folder for test fixtures
        └── questions.json  // Mock data for testing
    └── tsconfig.json
├── server/                 // The server application
├── .gitignore
├── cypress.config.ts       // Runs the application using imports from lib/
├── package.json
├── tsconfig.json
└── README.md              // App description, link to video, setup and usage instructions
Write Tests

Implement component tests for the Quiz component in the Quiz.cy.jsx file.
Implement end-to-end tests for the quiz flow in the quiz.cy.js file.
Run Tests
Use the following command to run the tests:

bash
Copy code
npm run test
Video Submission
Follow the Full-Stack Blog video submission guide for guidance on creating and sharing a video.

Testing with Cypress
- Component Testing
Component tests will validate the functionality of individual components such as buttons, inputs, and form submissions. This ensures that each component of the quiz behaves as expected in isolation.

- End-to-End Testing
End-to-end tests will simulate the full user experience, from starting the quiz to answering questions and seeing the final score. This helps ensure that the entire flow of the quiz works correctly and that the system behaves as expected under different scenarios.

