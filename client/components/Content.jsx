import React from "react";

import Code from "./Code";
import SideBar from "./SideBar";

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