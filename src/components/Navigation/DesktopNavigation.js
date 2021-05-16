import React from 'react';
import {NavLink} from "react-router-dom";

const DesktopNavigation = () => {
    return (
        <>
            <header className={"header"}>
                <nav className={"top-nav"}>
                    <NavLink exact to={"/"} className={"logo-desktop"}>
                        <img src="#" alt="logo allumni"/>
                    </NavLink>

                    <div className="wrapper-link">
                        <NavLink exact to={"#technologies"} className={"nav-desktop"}>
                            Technologies
                        </NavLink>

                        <NavLink exact to={"#developer"} className={"nav-desktop"}>
                            Developer
                        </NavLink>

                        <NavLink exact to={"#release_date"} className={"nav-desktop"}>
                            Release Date
                        </NavLink>

                        <NavLink exact to={"/about"} className={"nav-desktop"}>
                            About
                        </NavLink>

                    </div>
                </nav>
            </header>
        </>
    );
};

export default DesktopNavigation;
