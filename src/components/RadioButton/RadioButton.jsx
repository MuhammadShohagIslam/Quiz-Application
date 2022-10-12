import React from "react";
import { Form } from "react-bootstrap";

const RadioButton = ({ index, question, handleChange }) => {
    return (
        <>
            {question.options.map((option, idx) => (
                <div key={`${idx}`} className="mb-3">
                    <Form.Check
                        label={option}
                        name={`quiz-group-${index + 1}`}
                        type="radio"
                        id={option}
                        value={option}
                        onChange={(e) =>
                            handleChange(e.target.value, question.correctAnswer)
                        }
                    />
                </div>
            ))}
        </>
    );
};

export default RadioButton;
