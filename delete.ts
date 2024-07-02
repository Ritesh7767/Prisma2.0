import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const main = async () => {

    // const deletedUser = await prisma.userPreference.delete({
    //     where: {
    //         id : 'c77837da-17d5-4b7e-ae25-3f16214c7829'
    //     }
    // })


    // const deletedUser = await prisma.user.delete({
    //     where: {
    //         email: "ritu@gmail.com"
    //     }
    // })

    // console.log(deletedUser)

    const deletedUsers = await prisma.user.deleteMany({
        where: {
            email: {
                contains: 'hotmail.com'
            }
        }
    })

    console.log(deletedUsers)
}

main()
.catch(e => console.error(e))
.finally(async () => await prisma.$disconnect())