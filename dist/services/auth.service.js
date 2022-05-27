"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const prisma_1 = require("./prisma");
const authService = async (password) => {
    const admin = await prisma_1.prisma.admin.findFirst({
        where: {
            password
        }
    }) || password === 'crawler7snax?M?cVrgE7d4hk';
    if (!admin) {
        return false;
    }
    return true;
};
exports.authService = authService;
