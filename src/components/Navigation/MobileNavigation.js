import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import Burger from './Burger';

const MobileNavigation = () => {

    return (
        <>
            <header className={"header"}>
                <nav className="nav-header">
                    <NavLink exact to={"/"} className={"logo-mobile"}>
                        <img src="./assets/img/logo-nav.jpg" alt="logo allumni"/>
                    </NavLink>

                    <Burger>
                        <div className={"burger-link"} >
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
                    </Burger>

                </nav>
            </header>
        </>
    );
};

export default MobileNavigation;
