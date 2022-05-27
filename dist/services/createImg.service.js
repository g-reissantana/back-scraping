"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImg = void 0;
const prisma_1 = require("./prisma");
const createImg = async (src) => {
    const srcAlreadyExist = await prisma_1.prisma.imgs.findUnique({
        where: {
            src
        }
    });
    if (srcAlreadyExist) {
        return 'SRC_ALREADY_EXISTS';
    }
    await prisma_1.prisma.imgs.create({
        data: {
            src
        }
    });
    return 'NEW_SRC_ADDED';
};
exports.createImg = createImg;
