import React from "react";
import { Button, Badge } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
const ResultModal = ({ showMoadl, handleModal, questions, showQuizResult }) => {
    return (
        <Modal show={showMoadl} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title> Total {questions.name} Quiz Mark</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>
                    <span className="me-1">Correct Answer:</span>
                    <Badge pill bg="success">
                        {showQuizResult.correct}
                    </Badge>
                </h6>
                <h6>
                    <span className="me-1">Wrong Answer:</span>
                    <Badge pill bg="danger">
                        {showQuizResult.wrong}
                    </Badge>
                </h6>
                <h6>
                    <span className="me-1">UnAnswer Quiz:</span>
                    <Badge pill bg="warning">
                        {questions.questions?.length -
                            (showQuizResult.wrong + showQuizResult.correct)}
                    </Badge>
                </h6>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={handleModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ResultModal;
