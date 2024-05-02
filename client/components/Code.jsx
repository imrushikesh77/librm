import React, {useEffect, useState} from "react";
import dotenv from "dotenv";
dotenv.config();

const API_URL = process.env.FETCH_CODE_URL;

const Code = ({id}) => {
    const [code, setCode] = useState("");
    useEffect(() => {
        fetch(`${API_URL}/${id}`)
            .then(response => response.json())
            .then(data => {
                setCode(data.code);
            });
    }
    , [id]);
    return (
        <div className="code">
            <pre>
                <code>
                    {`${code}`}
                </code>
            </pre>
        </div>
    );
}

export default Code;
