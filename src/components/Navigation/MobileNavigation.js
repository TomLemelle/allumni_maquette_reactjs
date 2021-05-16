import React from 'react';
import {NavLink} from "react-router-dom";

const MobileNavigation = () => {
    return (
        <>
            <header className={"header"}>
                <nav className="nav-header">
                    <NavLink exact to={"/"} className={"logo-mobile"}>
                        <img src="" alt="logo allumni"/>
                    </NavLink>

                    <div className={"top-nav-burger"}>

                        <NavLink exact to={"#technologies"} className={"nav-mobile"}>
                            Technologies
                        </NavLink>

                        <NavLink exact to={"#developer"} className={"nav-mobile"}>
                            Developer
                        </NavLink>

                        <NavLink exact to={"#release_date"} className={"nav-mobile"}>
                            Release Date
                        </NavLink>

                        <NavLink exact to={"/about"} className={"nav-mobile"}>
                            About
                        </NavLink>

                    </div>

                </nav>
            </header>
        </>
    );
};

export default MobileNavigation;
