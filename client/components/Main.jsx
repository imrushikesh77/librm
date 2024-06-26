import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setAllData } from '../features/title/titleSlice';
import TitleCard from "./TitleCard.jsx";

import "../style/main.css";

const API_URL = process.env.FETCH_TITLES_URL;

const Main = () => {
    const dispatch = useDispatch();
    const allData = useSelector(state => state.title.allData);
    const searchResults = useSelector(state => state.title.searchResults);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                dispatch(setAllData(data));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [dispatch]);
    
    const dataToDisplay = searchResults.length > 0 ? searchResults : allData;

    return (
        <main>
            {
                dataToDisplay.map((title) => {
                    return (
                        <Link to={`/content/${title._id}`} key={title._id}>
                            <TitleCard title={title} />
                        </Link>
                    );
                })
            }
        </main>
    );
};

export default Main;
