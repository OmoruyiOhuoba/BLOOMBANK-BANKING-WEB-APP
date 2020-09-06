import React from "react";

const Footer = () => {
    return(
        <div>
            <footer className="footer">
            <a className="footer-first" href="https://github.com/OmoruyiOhuoba">GitHub</a>
            <a className="footer-first" href="https://omoruyiohuoba.com/">Website</a>
            <a className="footer-first" href="https://twitter.com/OmoruyiOhuoba">Twitter</a>
            <p>© {new Date().getFullYear()} Omoruyi Ohuoba. All Rights Reserved.</p>
            </footer>
        </div>
    )
}

export default Footer;