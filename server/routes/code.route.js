import express from 'express';
const router = express.Router();

import { 
    fetchTitles, 
    searchByTitle,
    fetchCode,
    addCode,
    updateCode,
    deleteCode
 } from '../controllers/code.controller.js';

 router.get('/titles', fetchTitles);
 router.get('/search-title/:title', searchByTitle);
 router.get('/code/:id', fetchCode);
 router.post('/add-code', addCode);
 router.put('/update-code/:id', updateCode);
 router.delete('/delete-code/:id', deleteCode);
 router.get('/health', (req, res) => {
     res.send('Code route is working');
 });

export default router;