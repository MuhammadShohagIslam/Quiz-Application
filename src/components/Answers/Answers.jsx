import React from "react";
import { Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import RadioButton from "../RadioButton/RadioButton";
import classes from "./Answer.module.css";

const Answers = ({
    questions,
    handleChange,
    handleCorrectAnswer,
}) => {
    return (
        <>
            {questions.questions &&
                questions.questions.map((q, index) => {
                    return (
                        <Col md={8} className="mb-4" key={q.id}>
                            <Card>
                                <Card.Header className="d-flex justify-content-between p-3">
                                    <h5>
                                        {" "}
                                        Quiz {index + 1}:{" "}
                                        {q.question
                                            .split("<p>")
                                            .join("")
                                            .split("</p>")
                                            .join("")}
                                    </h5>

                                    <h5
                                        className={`pe-2 ${classes.viewCurrentAnswer}`}
                                        onClick={(e) =>
                                            handleCorrectAnswer(
                                                e,
                                                q.correctAnswer
                                            )
                                        }
                                    >
                                        <FontAwesomeIcon icon={faEye} />
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <RadioButton
                                        index={index}
                                        question={q}
                                        handleChange={handleChange}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
        </>
    );
};

export default Answers;
