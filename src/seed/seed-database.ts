import { initialData, persons, ventures } from "./seed";
import { prisma } from "../lib/prisma"

async function main() {
    console.log('Start seeding...');
    
    try {
        // Limpiar base de datos
        await prisma.founder.deleteMany();
        await prisma.startup.deleteMany();
        await prisma.person.deleteMany(); // Nota el cambio aquí: persons, no person
        await prisma.venture.deleteMany();
        
        console.log('Database cleaned');

        // Crear startups con sus founders
        for (const startupData of initialData.startup) {
            const startup = await prisma.startup.create({
                data: {
                    ...startupData,
                    founders: {
                        create: initialData.founder.map(founder => ({
                            name: founder.name,
                            image: founder.image
                        }))
                    }
                }
            });
            console.log(`Created startup: ${startup.name}`);
        }

        // Crear persons (nota el cambio aquí)
        for (const person of persons) {
            await prisma.person.create({ // Nota el cambio aquí: persons, no person
                data: person
            });
            console.log(`Created person: ${person.name}`);
        }

        // Crear ventures
        for (const venture of ventures) {
            await prisma.venture.create({
                data: venture
            });
            console.log(`Created venture: ${venture.name}`);
        }

        console.log('Seeding finished successfully');
    } catch (error) {
        console.error('Error during seeding:', error);
        throw error;
    }
}

main()
    .catch((e) => {
        console.error('Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
    