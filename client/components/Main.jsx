import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dotenv from "dotenv";
dotenv.config();

import TitleCard from "./TitleCard";

import "../style/main.css";

const API_URL = process.env.FETCH_TITLES_URL;

const Main = () => {
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setTitles(data.map(title => (
                    <Link to={`/content/${title._id}`} key={title._id}>
                        <TitleCard title={title.title} />
                    </Link>
                )));
            });
    }, []);
    

    return (
        <main>
            {titles}
        </main>
    );
};

export default Main;
