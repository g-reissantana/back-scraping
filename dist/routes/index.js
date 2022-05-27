"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const getAllPosts_service_1 = require("../services/getAllPosts.service");
const getAllPosts_crawler_1 = require("../crawlers/getAllPosts.crawler");
const getLastPosts_crawler_1 = require("../crawlers/getLastPosts.crawler");
const isAdmin_middleware_1 = require("../middlewares/isAdmin.middleware");
exports.routes = express_1.default.Router();
exports.routes.get('/', async (req, res) => {
    const result = await (0, getAllPosts_service_1.getAllPosts)();
    return res.status(200).json(result);
});
exports.routes.post('/scripts/crawler/refresh', isAdmin_middleware_1.isAdminMiddleware, async (req, res) => {
    setInterval(async () => {
        console.log('REFRESH_LIST');
        const result = await (0, getLastPosts_crawler_1.getLastPostsCrawler)();
    }, 5000);
    return res.status(200).send('OK');
});
exports.routes.post('/scripts/crawler/getAll', isAdmin_middleware_1.isAdminMiddleware, async (req, res) => {
    const result = await (0, getAllPosts_crawler_1.getAllPostsCrawler)();
    return res.status(201).json({ message: 'CREATE_SUCCESSFUL' });
});
