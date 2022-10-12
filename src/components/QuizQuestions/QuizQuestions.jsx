import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Answers from "../Answers/Answers";
import classes from "./QuizQuestions.module.css";

const QuizQuestions = () => {
    const [questions, setQuestions] = useState([]);
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

    const handleChange = (value, correctAnswer) => {
        if (value === correctAnswer) {
            toast.success("This Is Correct Answer");
        } else {
            toast.error("This Is Wrong Answer");
        }
    };
    return (
        <section>
            {loading ? (
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "500px" }}
                >
                    <h2 className="text-center text-white">Loading...</h2>
                </div>
            ) : (
                <>
                    <div>
                        <h2 className={classes.quizQuestionTitle}>
                            Quiz About {questions.name}
                        </h2>
                    </div>
                    <div className="questionWrapper">
                        <Container>
                            <Row className="d-flex justify-content-center">
                                <Answers
                                    questions={questions}
                                    handleChange={handleChange}
                                />
                            </Row>
                        </Container>
                    </div>
                </>
            )}
        </section>
    );
};

export default QuizQuestions;
