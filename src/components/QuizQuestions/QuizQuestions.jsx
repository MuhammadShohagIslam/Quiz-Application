import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import Answers from "../Answers/Answers";
import classes from "./QuizQuestions.module.css";

const QuizQuestions = ({
    loading,
    questions,
    handleChange,
    handleCorrectAnswer,
    handleModal
}) => {
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
                                    handleCorrectAnswer={handleCorrectAnswer}
                                />
                                <div
                                    className={classes.showResultButtonWrapper}
                                >
                                    <Button
                                        className={classes.showResultButton}
                                        type="button"
                                        onClick={handleModal}
                                    >
                                        Show Result
                                    </Button>
                                </div>
                            </Row>
                        </Container>
                    </div>
                </>
            )}
        </section>
    );
};

export default QuizQuestions;
