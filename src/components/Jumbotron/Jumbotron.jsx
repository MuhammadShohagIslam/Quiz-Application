import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Jumbotron.module.css";

const Jumbotron = () => {
    return (
        <section className={classes.jumbotronHeader}>
            <Container className={classes.headerWrapper}>
                <div className="headerInfo">
                    <h2 className={classes.headerTitle}>
                        Let's Increase Your Proper Knowledge by MernQuiz
                    </h2>
                </div>
            </Container>
        </section>
    );
};

export default Jumbotron;
