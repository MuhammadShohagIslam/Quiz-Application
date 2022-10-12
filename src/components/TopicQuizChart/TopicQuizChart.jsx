import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Area,
    ResponsiveContainer,
} from "recharts";
import classes from "./TopicQuizChart.module.css";

const TopicQuizChart = () => {
    const [topicQuizsData, setTopicQuizsData] = useState([]);
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
        setTopicQuizsData(data);
        setLoading(false);
    };

    return (
        <section className="mb-4">
            <Container>
                <div className={classes.statisticHeaderSection}>
                    <h2
                        className={`text-center text-white ${classes.statisticHeaderSectionTitle}`}
                    >
                        MernTopicQuiz Statistics
                    </h2>
                </div>
                <div className={classes.areaChartWrapper}>
                    {loading ? (
                        <h2 className="text-white text-center">Loading...</h2>
                    ) : (
                        <ResponsiveContainer width={"99%"} height={350}>
                            <AreaChart
                                width={900}
                                height={350}
                                data={topicQuizsData}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
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
                                <XAxis dataKey="name" stroke="white" />
                                <YAxis
                                    tick={{ fill: "white" }}
                                    tickLine={{ stroke: "white" }}
                                />
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
                        </ResponsiveContainer>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default TopicQuizChart;
