import React from "react";
import Blogs from "../components/Blogs/Blogs";
import Layout from "../components/Layout/Layout";
import { useState, useEffect } from "react";

const BlogsPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Layout>
                <Blogs blogs={blogs} loading={loading}/>
            </Layout>
        </>
    );
};

export default BlogsPage;
