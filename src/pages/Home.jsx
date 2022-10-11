import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import QuizTopicCards from "../components/QuizTopicCards/QuizTopicCards";
import Layout from "./../components/Layout/Layout";

const Home = () => {
    const [topicQuizs, setTopicQuizs] = useState([]);

    useEffect(() => {
        loadQuizTopic();
    }, []);

    const loadQuizTopic = async () => {
        const response = await fetch(
            "https://openapi.programming-hero.com/api/quiz"
        );
        const { data } = await response.json();
        setTopicQuizs(data);
    };

    return (
        <>
            <Layout>
                <Jumbotron />
                <QuizTopicCards topicQuizs={topicQuizs} />
            </Layout>
        </>
    );
};

export default Home;
