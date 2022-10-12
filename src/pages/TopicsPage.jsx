import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import QuizTopicCards from "../components/QuizTopicCards/QuizTopicCards";

const TopicsPage = () => {
    const [topicQuizs, setTopicQuizs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadQuizTopic();
    }, []);

    const loadQuizTopic = async () => {
        setLoading(true);
        const response = await fetch(
            "https://openapi.programming-hero.com/api/quiz"
        );
        const { data } = await response.json();
        setTopicQuizs(data);
        setLoading(false);
    };
    return (
        <Layout>
            <QuizTopicCards topicQuizs={topicQuizs} loading={loading} />
        </Layout>
    );
};

export default TopicsPage;
