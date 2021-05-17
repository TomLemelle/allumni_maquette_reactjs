import React, { useState } from 'react';

const Burger = (props) => {

    const [isActive, setIsActive] = useState(false);

    const handleToggle = (e) => {
        setIsActive(!isActive);
    }

    return (
        <>
            <div className={"top-nav-burger"} onClick={handleToggle}>                        
                <div class="top"></div>
                <div class="middle"></div>
                <div class="bottom"></div>
            </div>

            {isActive ? props.children : null}
        </>
    );
};

export default Burger;