import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setSearchResults, clearSearchResults } from '../features/title/titleSlice.js';


const API_URI = process.env.SEARCH_TITLE_URL;

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const delayDebounceFn = setTimeout(async() => {
            if (searchTerm.trim() !== "") {
                await fetch(`${API_URI}/${searchTerm}`)
                    .then(response => response.json())
                    .then(data => {
                        dispatch(setSearchResults(data));
                        // console.log(data);
                    })
                    .catch(error => {
                        console.error("Error fetching data:", error);
                    });
            } else {
                dispatch(clearSearchResults());
            }
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm, dispatch]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleInputChange}
            />
        </div>
    );
}

export default SearchBar;
