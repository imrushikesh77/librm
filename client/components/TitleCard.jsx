import React from "react";

const TitleCard = ({title}) => {
    return (
        <div className="title-card">
            <h1>{title.title}</h1>
        </div>
    );
};

export default TitleCard;