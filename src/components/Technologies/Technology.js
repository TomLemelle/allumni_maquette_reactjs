import React from 'react';

const Technology = ({technology, children}) => {
    return (
        <div className={"technology"}>
            <div className={"wrapper-slider"}>
                <p>{technology}</p>
            </div>
            <div className={"children"}>
                <p>{children}</p>
            </div>
        </div>
    );
};

export default Technology;
