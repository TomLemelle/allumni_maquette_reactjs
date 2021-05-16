import React from 'react';

const HeroBanner = () => {
    return (
        <section className="hero-banner">
            <ul className="wrapper-hero-banner">
                <li>
                    <h1>Project Title</h1>
                </li>
                <li>
                    <img src="./assets/img/hero-banner.jpg" alt="image hero banner"/>
                </li>
                <li>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit,
                        vulputate eu pharetra nec, mattis ac.
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default HeroBanner;
