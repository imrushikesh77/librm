import React from "react";
import Code from "./Code.jsx";
import SideBar from "./SideBar.jsx";

import "../style/content.css";

const Content = ({id}) => {
    return (
        <div className="content">
            {id !== undefined && <SideBar id={id} />}
            <Code id={id} />
        </div>
    );
}

export default Content;