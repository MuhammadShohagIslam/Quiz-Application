import React from "react";
import { Container, Row } from "react-bootstrap";
import Blog from "../Blog/Blog";

const Blogs = ({ blogs, loading }) => {
    return (
        <article className="mt-5 mb-4">
            <Container>
                <Row className="ms-0 me-0">
                    {loading ? (
                        <h2 className="text-white text-center">Loading...</h2>
                    ) : (
                        <>
                            {blogs.map((blog) => (
                                <Blog key={blog.id} blog={blog} />
                            ))}
                        </>
                    )}
                </Row>
            </Container>
        </article>
    );
};

export default Blogs;
