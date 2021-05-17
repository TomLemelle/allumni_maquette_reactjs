import React from 'react';

const Developer = () => {
    return (
        <section className="developer">
            <ul className="wrapper-developer">
                <li className={"first-li"}>
                    <img src="./assets/img/developer.jpg" alt="image developer"/>
                </li>
                <li className={"second-li"}>
                    <h3>Developer</h3>
                </li>
                <li className={"third-li"}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit,
                        vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus,
                        ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique,
                        tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit
                        amet elit iaculis pretium sit amet quis magna.
                    </p>
                </li>
                <li className={"last-li"}>
                    <a href="https://linkedin.com">LinkedIn</a>
                </li>

            </ul>
        </section>
    );
};

export default Developer;
