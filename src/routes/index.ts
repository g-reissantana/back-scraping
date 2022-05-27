import express from 'express';

import { getAllPosts } from '../services/getAllPosts.service';
import { getAllPostsCrawler } from '../crawlers/getAllPosts.crawler';
import { getLastPostsCrawler } from '../crawlers/getLastPosts.crawler';
import { isAdminMiddleware } from '../middlewares/isAdmin.middleware';

export const routes = express.Router();

routes.get('/', async(req, res) => {

    const result = await getAllPosts();

    return res.status(200).json(result)
})

routes.post('/scripts/crawler/refresh', isAdminMiddleware, async (req, res) => {

    setInterval(async() => {
        console.log('REFRESH_LIST');
        const result = await getLastPostsCrawler();
    }, 5000);

    return res.status(200).send('OK');
})

routes.post('/scripts/crawler/getAll', isAdminMiddleware, async(req, res) => {

    const result = await getAllPostsCrawler();

    return res.status(201).json({message: 'CREATE_SUCCESSFUL'})
})