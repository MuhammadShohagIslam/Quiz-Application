import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BlogsPage from "./pages/BlogsPage";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import StatisticsPage from "./pages/StatisticsPage";

function App() {
    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/topic-quiz/:quizId" element={<QuizPage />} />
                <Route path="/statistics" element={<StatisticsPage />} />
                <Route path="/blog" element={<BlogsPage />} />
            </Routes>
        </>
    );
}

export default App;
