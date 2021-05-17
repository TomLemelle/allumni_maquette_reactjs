import React from 'react';

const DesktopFooter = () => {
    return (
        <footer className="footer footer-desktop">
            <ul className="footer-list">
                <li className={"first-li"}>
                    <h2>Project Title</h2>
                    <img src="./assets/img/telephone.jpg" alt="icon téléphone" className={"icon-footer"}/>
                    <span>00 00 00 00 00</span>

                    <img src="./assets/img/mail.jpg" alt="icon mail" className={"icon-footer"}/>
                    <span>email@gmail.com</span>

                    <img src="./assets/img/location.jpg" alt="icon carte" className={"icon-footer"}/>
                    <span>72 Rue de la République, 76140 Le Petit-Quevilly, France</span>

                    <img src="./assets/img/logo-footer.jpg" alt="logo footer" className={"logo-footer"}/>
                </li>

                <li className={"footer-last-li"}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.959860917644!2d1.0638099159233976!3d49.42857286834327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0de1ba5900001%3A0xcef071091f60c980!2sSeine%20Innopolis!5e0!3m2!1sen!2sfr!4v1621256939951!5m2!1sen!2sfr" width="600" height="450"></iframe> 
                </li>
            </ul>
        </footer>
    );
};

export default DesktopFooter;