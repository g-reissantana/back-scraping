import { prisma } from "./prisma"

export const getAllPosts = async() => {

    const allPosts = await prisma.imgs.findMany()

    return allPosts;
}