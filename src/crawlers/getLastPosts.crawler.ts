import { prisma } from "../services/prisma";
import Puppeteer, { Browser, PDFOptions } from "puppeteer";
import fs from 'fs';
import { createImg } from "../services/createImg.service";

export const getLastPostsCrawler = async () => {
    const browser = await Puppeteer.launch({
        headless: true
    });

    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/explore/tags/atheneuonu/');

    const imgList = await page.evaluate(() => {
        // This is function executing in browser

        const nodeList = document.querySelectorAll('article img');

        const imageArray = [nodeList[0], nodeList[1], nodeList[2]];

        const imgList = imageArray.map(({src}: any) => ({
            src
        }))

        return imgList;
    });

    imgList.forEach(async(item: any) => {
        await createImg(item.src)
    })


    // fs.writeFile('instagram.json', JSON.stringify(imgList, null, 4), err => {
    //     if(err) {
    //         throw new Error("Something went wrong :( ");
    //     }
    // })

    // browser.close();
};