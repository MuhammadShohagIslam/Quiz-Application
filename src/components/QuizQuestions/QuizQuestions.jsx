import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';


const QuizQuestions = () => {
    const [questions, setQuestions] = useState([]);
    const { quizId } = useParams();

    useEffect(() => {
        loadQuizQuestions();
    }, []);

    const loadQuizQuestions = async () => {
        const response = await fetch(
            `https://openapi.programming-hero.com/api/quiz/${quizId}`
        );
        const { data } = await response.json();
        setQuestions(data);
    };
    console.log(questions.questions, "god");

    const handleChange = (value, correctAnswer) => {
        if(value === correctAnswer){
            toast.success("This Is Correct Answer")
        }else{
            toast.error("This Is Wrong Answer")
        }
       
    };
    return (
        <section>
            <div className="quizQuestionTitle">
                <h2>Quiz About {questions.name}</h2>
            </div>
            <div className="questionWrapper">
                <Container>
                    <Row>
                        {questions.questions &&
                            questions.questions.map((q, index) => {
                                return (
                                    <Col md={8}>
                                        <Card>
                                            <Card.Header>
                                                Quiz {index + 1}:{" "}
                                                {q.question
                                                    .split("<p>")
                                                    .join("")
                                                    .split("</p>")
                                                    .join("")}
                                            </Card.Header>
                                            <Card.Body>
                                                {q.options.map(
                                                    (option, idx) => (
                                                        <>
                                                            <div
                                                                key={`${idx}`}
                                                                className="mb-3"
                                                            >
                                                                <Form.Check
                                                                   
                                                                    label={
                                                                        option
                                                                    }
                                                                    name={`quiz-group-${index+1}`}
                                                                    type="radio"
                                                                    id={option}
                                                                    value={
                                                                        option
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleChange(e.target.value, q.correctAnswer)
                                                                    }
                                                                />
                                                            </div>
                                                        </>
                                                    )
                                                )}
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })}
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default QuizQuestions;
