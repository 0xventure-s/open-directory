// seed.ts
import { initialData, persons, ventures } from "./seed";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  try {
    // Limpiar base de datos (en orden correcto por las relaciones)
    await prisma.founder.deleteMany();
    await prisma.startup.deleteMany();
    await prisma.person.deleteMany();
    await prisma.venture.deleteMany();

    console.log('Database cleaned');

    // Crear startups con sus founders
    for (const startupData of initialData.startup) {
      const { founders, ...startupFields } = startupData;
      
      const startup = await prisma.startup.create({
        data: {
          ...startupFields,
          founders: {
            create: founders.map(f => ({
              name: f.name,
              image: f.image,
              linkFounder: f.linkFounder // Asegúrate de que el campo existe en tu schema.prisma
            }))
          }
        },
        include: {
          founders: true // Incluir relaciones si necesitas debuggear
        }
      });
      console.log(`Created startup: ${startup.name} with ${startup.founders.length} founders`);
     
    }

    // Crear persons (asegúrate de que el array 'persons' está definido)
    if (persons && persons.length > 0) {
      for (const person of persons) {
        await prisma.person.create({
          data: person
        });
        console.log(`Created person: ${person.name}`);
      }
    }

    // Crear ventures (asegúrate de que el array 'ventures' está definido)
    if (ventures && ventures.length > 0) {
      for (const venture of ventures) {
        await prisma.venture.create({
          data: venture
        });
        console.log(`Created venture: ${venture.name}`);
      }
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