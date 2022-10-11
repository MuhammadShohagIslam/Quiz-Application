import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <footer class="py-4 bg-white">
            <p className={`${classes.footerParagarph} text-center mb-0`}>
                Copyright 2022 MernQuiz
            </p>
        </footer>
    );
};

export default Footer;
