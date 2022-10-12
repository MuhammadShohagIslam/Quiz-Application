import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
    return (
        <>
            <Navbar
                className={classes.navBar}
                bg={classes.navBar}
                expand="lg"
                variant="dark"
            >
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand className={classes.logo}>
                            MernQuiz
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/">
                                <Nav.Link className={classes.navLink}>
                                    Home
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/topics">
                                <Nav.Link className={classes.navLink}>
                                    Topics
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/statistics">
                                <Nav.Link className={classes.navLink}>
                                    Statistics
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/blog">
                                <Nav.Link className={classes.navLink}>
                                    Blog
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;
