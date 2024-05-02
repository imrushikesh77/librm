import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dotenv from "dotenv";
dotenv.config();

const API_URL = process.env.FETCH_TITLES_URL;

const SideBar = ({ id }) => {
    const [active, setActive] = useState(id);
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setTitles(data.map(title => (
                    <Link to={`/content/${title._id}`} key={title._id}>
                        <h1
                            style={{
                                color: active !== title._id ? "white" : "#060639",
                            }}
                            onClick={() => setActive(title._id)}
                        >
                            {title.title}
                        </h1>
                    </Link>
                )));
            });
    }, [active]);

    return (
        <div className="side-bar">
            {titles}
        </div>
    );
}

export default SideBar;
