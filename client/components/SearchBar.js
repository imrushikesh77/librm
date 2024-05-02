import React, { useState, useEffect } from "react";
import dotenv from "dotenv";
dotenv.config();

const API_URI = process.env.SEARCH_TITLE_URL;

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchTerm.trim() !== "") {
                fetch(`${API_URI}/${searchTerm}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                    })
                    .catch(error => {
                        console.error("Error fetching data:", error);
                    });
            }
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

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
