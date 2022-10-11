import React, { useEffect, useState } from "react";
import {
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Area,
} from "recharts";
import classes from "./TopicQuizChart.module.css";


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
        setTopicQuizsData(data);
    };
    console.log(topicQuizsData);

    return (
        <section>
            <div className="mt-5 mb-4">
                <h2 className="text-center text-white">MernTopicQuiz Statistics</h2>
            </div>
            <div className={classes.areaChartWrapper}>
                <AreaChart
                    width={900}
                    height={350}
                    data={topicQuizsData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient
                            id="colorUv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#8884d8"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#8884d8"
                                stopOpacity={0}
                            />
                        </linearGradient>
                        <linearGradient
                            id="colorPv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#82ca9d"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#82ca9d"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="total"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#colorUv)"
                    />
                </AreaChart>
            </div>
        </section>
    );
};

export default TopicQuizChart;
