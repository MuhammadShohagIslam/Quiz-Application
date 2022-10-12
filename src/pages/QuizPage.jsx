import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../components/Layout/Layout";
import QuizQuestions from "../components/QuizQuestions/QuizQuestions";
import ResultModal from "../components/ResultModal/ResultModal";

const QuizPage = () => {
    const [questions, setQuestions] = useState([]);
    const [showQuizResult, setShowQuizResult] = useState({
        id: [],
        correct: 0,
        wrong: 0,
    });
    const [showMoadl, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const { quizId } = useParams();

    useEffect(() => {
        loadQuizQuestions(quizId);
    }, [quizId]);

    const loadQuizQuestions = async (quizId) => {
        setLoading(true);
        const response = await fetch(
            `https://openapi.programming-hero.com/api/quiz/${quizId}`
        );
        const { data } = await response.json();
        setQuestions(data);
        setLoading(false);
    };

    const handleChange = (value, question) => {
        const { correctAnswer, id } = question;
        if (value === correctAnswer) {
            toast.success("This Is Correct Answer");
            if (!showQuizResult.id.includes(id)) {
                setShowQuizResult((oldOne) => ({
                    ...oldOne,
                    id: [...showQuizResult.id, id],
                    correct: showQuizResult.correct + 1,
                }));
            }
        } else {
            toast.error("This Is Wrong Answer");
            if (!showQuizResult.id.includes(id)) {
                setShowQuizResult((oldOne) => ({
                    ...oldOne,
                    id: [...showQuizResult.id, id],
                    wrong: showQuizResult.wrong + 1,
                }));
            }
        }
    };

    const handleCorrectAnswer = (event, correctAnswer) => {
        toast.success(correctAnswer);
    };

    const handleModal = () => setShowModal(!showMoadl);

    return (
        <Layout>
            <QuizQuestions
                questions={questions}
                loading={loading}
                handleChange={handleChange}
                handleCorrectAnswer={handleCorrectAnswer}
                handleModal={handleModal}
            />
            <ResultModal
                questions={questions}
                showMoadl={showMoadl}
                handleModal={handleModal}
                showQuizResult={showQuizResult}
            />
        </Layout>
    );
};

export default QuizPage;
