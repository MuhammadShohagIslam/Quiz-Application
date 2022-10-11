import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import classes from "./QuizTopicCard.module.css";

const QuizTopicCard = ({ quizTopic }) => {
    const { logo, name, total } = quizTopic;
    return (
        <Col md={3} className="mb-4">
            <Card className={classes.topicCard}>
                <Card.Img
                    className={classes.topicCardImage}
                    variant="top"
                    alt={name}
                    src={logo}
                />
                <Card.Body>
                    <div className={classes.topicCardInfo}>
                        <Card.Title>{name}</Card.Title>
                        <Card.Title>Total Quiz's: {total}</Card.Title>
                    </div>
                    <div className={`${classes.topicCardButtonWrapper} pt-2`}>
                        <Button
                            className={classes.topicCardButton}
                            variant="dark"
                        >
                            Start Practice <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default QuizTopicCard;
