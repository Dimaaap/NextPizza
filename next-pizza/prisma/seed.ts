/*import { prisma } from "./prisma-client";

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: "User",
                email: "user@test.gmail", 
                password: hashSync("1111", 10),
                verified: new Date(),
                role: 'USER'
            },
            {}
        ]
    });
}

async function down() {

}


async function main(){
    try{
        await down();
        await up();
    } catch(e) {
        console.error(e);
    }
}*/
