import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import QuizTopicCards from "../components/QuizTopicCards/QuizTopicCards";
import Layout from "../components/Layout/Layout";

const HomePage = () => {
    const [topicQuizs, setTopicQuizs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadQuizTopic();
    }, []);

    const loadQuizTopic = async () => {
        setLoading(true)
        const response = await fetch(
            "https://openapi.programming-hero.com/api/quiz"
        );
        const { data } = await response.json();
        setTopicQuizs(data);
        setLoading(false)
    };

    return (
        <>
            <Layout>
                <Jumbotron />
                <QuizTopicCards topicQuizs={topicQuizs} loading={loading}/>
            </Layout>
        </>
    );
};

export default HomePage;
