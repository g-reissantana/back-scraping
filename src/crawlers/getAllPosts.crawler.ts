import { prisma } from "../services/prisma";
import Puppeteer, { Browser, PDFOptions } from "puppeteer";
import fs from 'fs';
import { createImg } from "../services/createImg.service";

export const getAllPostsCrawler = async () => {
    const browser = await Puppeteer.launch({
        headless: true
    });

    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/explore/tags/atheneuonu/');
    await page.screenshot({ path: 'lastHastags.png' });

    const imgList = await page.evaluate(() => {
        // This is function executing in browser

        const nodeList = document.querySelectorAll('article img');

        const imageArray = [...nodeList];

        const imgList = imageArray.map(({src}: any) => ({
            src
        }))

        return imgList;
    });

    imgList.forEach(async(item: any) => {
        await createImg(item.src)
    })


    fs.writeFile('lastInstagram.json', JSON.stringify(imgList, null, 4), err => {
        if(err) {
            console.log(err);
            throw new Error("Something went wrong :( ");
        }
    })

    browser.close();
};