import React from "react";
import { Container, Row } from "react-bootstrap";
import QuizTopicCard from "../QuizTopicCard/QuizTopicCard";
import classes from "./QuizTopicCards.module.css";

const QuizTopicCards = ({ topicQuizs, loading }) => {
    return (
        <>
            <Container className={classes.quizTopicCards}>
                <Row>
                    {loading ? (
                        <h2 className="text-white text-center">Loading...</h2>
                    ) : (
                        <>
                            {topicQuizs.length > 0 ? (
                                <>
                                    {topicQuizs.map((tq) => (
                                        <QuizTopicCard
                                            key={tq.id}
                                            quizTopic={tq}
                                        />
                                    ))}
                                </>
                            ) : (
                                <h2 className="text-white text-center">
                                    There is no Quiz Topic
                                </h2>
                            )}
                        </>
                    )}
                </Row>
            </Container>
        </>
    );
};

export default QuizTopicCards;
