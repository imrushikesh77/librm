import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBar = ({ id }) => {
    const [active, setActive] = useState(id);
    const allData = useSelector(state => state.title.allData);
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        const generateTitles = () => {
            const titles = allData.map(title => (
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
            ));
            setTitles(titles);
        };

        generateTitles();
    }, [active, allData]);

    return (
        <div className="side-bar">
            {titles}
        </div>
    );
}

export default SideBar;
