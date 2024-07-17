import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateQuestion from "./pages/CreateQuestion";
import QuestionsList from "./pages/GetAllQuestions";
import CreateQuestionPaper from "./pages/CreateQuestionPaper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={CreateQuestion} />
        <Route path="/allquestions" Component={QuestionsList} />
        <Route path="/questionpaper" Component={CreateQuestionPaper} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
