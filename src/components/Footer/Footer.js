import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer-list">
                <li>
                    <h2>Project Title</h2>
                </li>
                <li>
                    <img src="./assets/img/telephone.jpg" alt="icon téléphone" className={"icon-footer"}/>
                    <span>00 00 00 00 00</span>
                </li>
                <li>
                    <img src="./assets/img/mail.jpg" alt="icon mail" className={"icon-footer"}/>
                    <span>email@gmail.com</span>
                </li>
                <li>
                    <img src="./assets/img/location.jpg" alt="icon carte" className={"icon-footer"}/>
                    <span>72 Rue de la République, 76140 Le Petit-Quevilly, France</span>
                </li>

                <li>
                    <img src="./assets/img/map-location.jpg" alt="image location" className={"location-map"}/>
                </li>
                <li className={"footer-last-li"}>
                    <img src="./assets/img/logo-footer.jpg" alt="logo footer" className={"logo-footer"}/>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
