import React, {useState} from "react";
import "../style/addSnippet.css"; // Make sure to import the CSS file
const API_URL = process.env.ADD_CODE_URL;

const AddSnippet = () => {
    const [title, setTitle] = useState("");
    const [code, setCode] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            console.log(API_URL);
            const response = await fetch("https://librm-backend.onrender.com/add-code", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, code }),
            });
            if (response.ok) {
                console.log("Snippet added successfully");
                setTitle("");
                setCode("");
            } else {
                console.log("Failed to add snippet");
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    return (
        <div className="add-snippet-container">
            <h1>Add Snippet</h1>
            <form className="add-snippet-form" onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input 
                        type="text" 
                        name="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </label>
                <label>
                    Code:
                    <textarea 
                        name="code" 
                        value={code} 
                        onChange={(e) => setCode(e.target.value)} 
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddSnippet;
