import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const main = async () => {

    // const updatedUser = await prisma.user.update(
    //     {
    //         where: {
    //             // name: "ritesh"
    //             email: 'hotmail.com'
    //         },
    //         data: {
    //             // email: "hotmail.com"
    //             // age: {
    //                 // increment: 10
    //                 // decrement: 10
    //                 // multiply: 10
    //             //     divide: 10
    //             // }
    //             UserPreference: {
    //                 // create: {
    //                 //     emailUpdated: true
    //                 // }
    //                 disconnect: true
    //             }
    //         }
    //     }
    // )

    // console.log(updatedUser)

    // const userPreference = await prisma.userPreference.create(
    //     {
    //         data: {
    //             emailUpdated: true,
    //             userId: '68887b5d-15d9-4ef0-bd6e-ce654c9d30d0'
    //         }
    //     }
    // )

    // const updatedUserPreference = await prisma.userPreference.update({
    //     where: {
    //         userId: '68887b5d-15d9-4ef0-bd6e-ce654c9d30d0'
    //     },
    //     data: {
    //         emailUpdated: true  
    //     }
    // })

    const user = await prisma.user.findUnique({
        where: {
            id: '68887b5d-15d9-4ef0-bd6e-ce654c9d30d0'
        },
        include: {
            UserPreference: {
                // emailUpdated: true
                select: {
                    emailUpdated: true
                }
            }
        }
    })
    console.log(user)
    // console.log(updatedUserPreference)
}

main()
.catch(e => console.error(e))
.finally(async () => await prisma.$disconnect())

