import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){

    // const user = await prisma.user.create({
    //     data: {
    //         name: "vivek"
    //     }
    // })

    // const user = await prisma.user.findMany()
    
    // const user = await prisma.user.deleteMany()
    // console.log(user)
    // const deleted = await prisma.user.delete({
    //     where: {
    //         name: "vivek"
    //     }
    // })
    // const user = await prisma.user.create({
    //     data: {
    //         name: "vivek",
    //         age: 15,
    //         // role : 'BASIC',
    //         email: 'vivek7767@outlook.com',
    //         isAdmin: false,
    //         largeNumber: 4324324243243,
    //         preferences: {
    //             coding: 'python'
    //         },
    //         UserPreference: {
    //             create: {
    //                 emailUpdated: true
    //             }
    //         }
    //     },
    //     include: {
    //         UserPreference: true
    //     }
    // })

    const user = await prisma.user.create(
        {
            data: {
                name: "ritu",
                age: 23,
                email: 'ritu@gmail.com',
                isAdmin: false,
                largeNumber: 343543,
                preferences: {
                    coffee: true
                },
                UserPreference: {
                    create: {
                        emailUpdated: false
                    }
                }
            },
            select: {
                name: true,
                age: true,
                email: true,
                UserPreference: true
            }
        }
    )
    console.log(user)
}

main()
.catch(e => {
    console.error(e.message)
})
.finally(async () => {
    await prisma.$disconnect()
})