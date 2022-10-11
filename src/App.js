import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Statistics from "./pages/Statistics";

function App() {
    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/topic-quiz/:quizId" element={<Quiz />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/blog" element={<Blogs />} />
            </Routes>
        </>
    );
}

export default App;
