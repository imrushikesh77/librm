import app from "./app.js";
import dotenv from "dotenv";
dotenv.config({
    path: "./.env",
});

import dbConnect from "./dbConnect.js";

const PORT = process.env.PORT || 3000;

dbConnect()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        }
    );
})
.catch((error) => {
    console.error("Error connecting to the database: ", error);
});

