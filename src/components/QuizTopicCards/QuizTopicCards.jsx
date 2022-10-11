import React from "react";
import { Container, Row } from "react-bootstrap";
import QuizTopicCard from "../QuizTopicCard/QuizTopicCard";
import classes from "./QuizTopicCards.module.css";

const QuizTopicCards = ({ topicQuizs }) => {
    return (
        <>
            <Container className={classes.quizTopicCards}>
                <Row>
                    {topicQuizs.length > 0 ? (
                        <>
                            {topicQuizs.map((tq) => (
                                <QuizTopicCard key={tq.id} quizTopic={tq} />
                            ))}
                        </>
                    ) : (
                        <h2>There is no Quiz Topic</h2>
                    )}
                </Row>
            </Container>
        </>
    );
};

export default QuizTopicCards;
