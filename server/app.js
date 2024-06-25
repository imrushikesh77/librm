import express from 'express';
import cors from 'cors';

const app = express();

import router from './routes/code.route.js';


const corsOptions = {
    origin: 'https://librm.vercel.app',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', router);

export default app;