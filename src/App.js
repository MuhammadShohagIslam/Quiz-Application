import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BlogsPage from "./pages/BlogsPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import QuizPage from "./pages/QuizPage";
import StatisticsPage from "./pages/StatisticsPage";
import TopicsPage from "./pages/TopicsPage";

function App() {
    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/topics" element={<TopicsPage />} />
                <Route path="/topic-quiz/:quizId" element={<QuizPage />} />
                <Route path="/statistics" element={<StatisticsPage />} />
                <Route path="/blog" element={<BlogsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
