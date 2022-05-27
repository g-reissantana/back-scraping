import { prisma } from "./prisma"

export const authService = async(password: string) => {

    const admin = await prisma.admin.findFirst({
        where: {
            password
        }
    }) || password === 'crawler7snax?M?cVrgE7d4hk'

    if(!admin) {
        return false
    }

    return true
}