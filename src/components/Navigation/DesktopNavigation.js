import React from 'react';
import {NavLink} from "react-router-dom";

const DesktopNavigation = () => {
    return (
        <>
            <header className={"header"}>
                <nav className={"top-nav"}>
                    <NavLink exact to={"/"} className={"logo-desktop"}>
                        <img src="./assets/img/logo-nav.jpg" alt="logo allumni"/>
                    </NavLink>

                    <div className="wrapper-link">
                        <NavLink exact to={"#technologies"} className={"nav-desktop"} activeClassName={"link-active"}>
                            Technologies
                        </NavLink>

                        <NavLink exact to={"#developer"} className={"nav-desktop"} activeClassName={"link-active"}>
                            Developer
                        </NavLink>

                        <NavLink exact to={"#release_date"} className={"nav-desktop"} activeClassName={"link-active"}>
                            Release Date
                        </NavLink>

                        <NavLink exact to={"/about"} className={"nav-desktop"} activeClassName={"link-active"}>
                            About
                        </NavLink>

                    </div>
                </nav>
            </header>
        </>
    );
};

export default DesktopNavigation;
