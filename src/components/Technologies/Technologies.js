import React from 'react';
import Technology from './Technology';

const Technologies = () => {

    return (
        <section className="technologies grid-column-2 grid-column-3">
            <Technology technology={"CSS"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo
            </Technology>

            <Technology technology={"HTML"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo
            </Technology>

            <Technology technology={"JAVASCRIPT"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo
            </Technology>
        </section>
    );
};

export default Technologies;
