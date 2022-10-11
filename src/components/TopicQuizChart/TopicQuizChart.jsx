import React, { useState, useEffect } from "react";
import { LineChart, Line } from "recharts";

const TopicQuizChart = () => {
    const [topicQuizsData, setTopicQuizsData] = useState([]);

    useEffect(() => {
        loadQuizTopic();
    }, []);

    const loadQuizTopic = async () => {
        const response = await fetch(
            "https://openapi.programming-hero.com/api/quiz"
        );
        const { data } = await response.json();
        const newData = data.map((d) => ({
            name: d.name,
            pv: d.total,
        }));
        console.log(newData, data);
        setTopicQuizsData(newData);
    };
    console.log(topicQuizsData);
    return (
        <div>
            <LineChart
                width={400}
                height={400}
                data={topicQuizsData.length > 0 && topicQuizsData}
            >
                <Line type="monotone" dataKey="name" stroke="#fff" />
            </LineChart>
        </div>
    );
};

export default TopicQuizChart;
