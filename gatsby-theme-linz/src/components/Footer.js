import React from "react";
import "./Footer.scss";
import nzgovtlogo from "../images/nz-govt-logo-rev.svg"

const Footer = () => (
    <footer className="TitlesFooter lui-footer lui-footer-small">
        <div className="lui-footer-columns">
        <div>
            <ul className="lui-footer-list">
            <li className="lui-footer-inline-list-item">
                <a href="https://www.linz.govt.nz/contact-us" target="_blank" rel="noreferrer">
                Contact
                </a>
            </li>
            <li className="lui-footer-inline-list-item">
                <a href="https://www.linz.govt.nz/privacy" target="_blank" rel="noreferrer">
                Privacy
                </a>
            </li>
            </ul>
        </div>
        <div className="lui-footer-nz-govt-logo">
            <a href="https://www.govt.nz" rel="noopener noreferrer" target="_blank">
                <img alt="Open New Zealand Government website in new window/tab. " src={nzgovtlogo} />
            </a>
        </div>
        </div>
    </footer>
);

export default Footer;