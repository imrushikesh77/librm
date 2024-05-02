import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar.jsx";

// import css
import "../style/navbar.css"

const NavBar = () => {
    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>librm</li>
                </Link>
                <li><SearchBar/></li>
            </ul>
        </nav>
    );
};

export default NavBar;
