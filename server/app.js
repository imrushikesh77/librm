import express from 'express';
const app = express();

import router from './routes/code.route.js';


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', router);

export default app;