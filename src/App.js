import React from "react";
import { Route, Routes } from "react-router-dom";
import QuizQuestion from "./components/QuizQuestions/QuizQuestions";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import { ToastContainer} from "react-toastify";


function App() {
    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blogs />} />
                <Route path="/topic-quiz/:quizId" element={<QuizQuestion />} />
            </Routes>
        </>
    );
}

export default App;
