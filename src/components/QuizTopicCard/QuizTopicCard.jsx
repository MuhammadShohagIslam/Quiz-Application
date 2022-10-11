import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import classes from "./QuizTopicCard.module.css";

const QuizTopicCard = ({ quizTopic }) => {
    const { id, logo, name, total } = quizTopic;
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
                    <Link
                        className={`${classes.topicCardButtonWrapper} pt-2`}
                        to={`/topic-quiz/${id}`}
                    >
                        <Button className={classes.topicCardButton}>
                            Start Practice{" "}
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default QuizTopicCard;
