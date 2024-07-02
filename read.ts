import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){

    const user = await prisma.user.findMany(
        {
            where: {
                // email: "ritesh7767@outlook.com"
                // name: {equals: 'ritesh'},
                // name: {not: 'ritesh'}
                // name: {in: ['ritesh', 'vivek']}
                // name: {notIn: ['ritesh', 'vivek']},
                // age: {gte: 20}
                // email: {contains: '@outlook.com'}
                // email: {endsWith: 'outlook.com'}
                // email: {startsWith: 'ritesh'}
                // AND: [
                //     {
                //         email: {contains: '@outlook.com'}
                //     },
                //     {
                //         name: "ritesh"
                //     }
                // ]
                // OR: [
                //     {email: {contains: '@outlook.com'}},
                //     {age: {gte: 20}}
                // ]

                // UserPreference: {
                //     emailUpdated: true
                // }

                // writtenPost: {
                //     some: {
                //         title: 'test'
                //     }
                // }

            },
            distinct: ["name", 'age'],
            orderBy: {
                age: 'asc'
            },
            // take: 2,
            // skip: 1,
            select: {
                age: true,
                name: true,
                email: true,
                UserPreference: true,
                id: false
            }
        }
    )
    console.log(user)

    const post = await prisma.post.findMany(
        {
            where: {
                author: {
                    is: {
                        age: {gte: 20}
                    }
                }
            }
        }
    )

    console.log(post)
}

main()
.catch(e => console.error(e))
.finally(async () => await prisma.$disconnect())
