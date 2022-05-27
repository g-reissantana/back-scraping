"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = void 0;
const prisma_1 = require("./prisma");
const getAllPosts = async () => {
    const allPosts = await prisma_1.prisma.imgs.findMany();
    return allPosts;
};
exports.getAllPosts = getAllPosts;
