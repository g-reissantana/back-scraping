import { prisma } from "./prisma";

export const createImg = async(src: string) => {

    const srcAlreadyExist = await prisma.imgs.findUnique({
        where: {
            src
        }
    })

    if(srcAlreadyExist) {
        return 'SRC_ALREADY_EXISTS'
    }

    await prisma.imgs.create({
        data: {
            src
        }
    })

    return 'NEW_SRC_ADDED'
}