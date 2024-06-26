import React, {useEffect, useState} from "react";

const API_URL = process.env.FETCH_CODE_URL;

const Code = ({id}) => {
    const [code, setCode] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setCode(data.code);
                } else {
                    console.error("Failed to fetch code");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, [id]);
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
