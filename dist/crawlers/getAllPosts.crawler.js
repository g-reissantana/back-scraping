"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPostsCrawler = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const fs_1 = __importDefault(require("fs"));
const createImg_service_1 = require("../services/createImg.service");
const getAllPostsCrawler = async () => {
    const browser = await puppeteer_1.default.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/explore/tags/atheneuonu/');
    await page.screenshot({ path: 'lastHastags.png' });
    const imgList = await page.evaluate(() => {
        // This is function executing in browser
        const nodeList = document.querySelectorAll('article img');
        const imageArray = [...nodeList];
        const imgList = imageArray.map(({ src }) => ({
            src
        }));
        return imgList;
    });
    imgList.forEach(async (item) => {
        await (0, createImg_service_1.createImg)(item.src);
    });
    fs_1.default.writeFile('lastInstagram.json', JSON.stringify(imgList, null, 4), err => {
        if (err) {
            console.log(err);
            throw new Error("Something went wrong :( ");
        }
    });
    browser.close();
};
exports.getAllPostsCrawler = getAllPostsCrawler;
