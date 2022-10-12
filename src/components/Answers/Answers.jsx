import React from "react";
import { Col, Card } from "react-bootstrap";
import RadioButton from "../RadioButton/RadioButton";

const Answers = ({ questions, handleChange }) => {
    return (
        <>
            {questions.questions &&
                questions.questions.map((q, index) => {
                    return (
                        <Col md={8} className="mb-4" key={q.id}>
                            <Card>
                                <Card.Header className="h5 p-3">
                                    Quiz {index + 1}:{" "}
                                    {q.question
                                        .split("<p>")
                                        .join("")
                                        .split("</p>")
                                        .join("")}
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
