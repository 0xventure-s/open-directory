"use server";

import { prisma } from "@/lib/prisma";
import { Startup, Persons, Ventures, Founder } from "@/interface";
import { unstable_noStore as noStore } from 'next/cache';

interface StartupFilters {
  marketType?: string | string[];
}

export async function getStartups(
  filters?: StartupFilters
): Promise<Startup[]> {
  try {
    const startups = await prisma.startup.findMany({
      where: {
        marketType: filters?.marketType
          ? {
              in: Array.isArray(filters.marketType)
                ? filters.marketType
                : [filters.marketType],
            }
          : undefined,
      },
      include: {
        founders: {
          select: {
            id: true,
            name: true,
            image: true,
            linkFounder: true,
            startupId: true,
          },
        },
      },
      orderBy: {
        name: "asc", // Orden alfabético por defecto
      },
    });

    return startups;
  } catch (error) {
    console.error("Error fetching startups:", error);
    throw new Error("Error al obtener las startups");
  }
}




export async function getFreshRandomStartups(limit: number = 3) {
  // 1. Desactivar TODOS los cachés de Next.js
  noStore();

  // 2. Obtener total de startups (siempre fresco)
  const totalStartups = await prisma.startup.count();

  // 3. Calcular salto aleatorio dinámico
  const skip = Math.floor(Math.random() * Math.max(0, totalStartups - limit));

  // 4. Query con resultados no cacheados
  return prisma.startup.findMany({
    include: {
      founders: {
        select: {
          id: true,
          name: true,
          image: true,
          linkFounder: true,
          startupId: true,
        },
      },
    },
    take: limit,
    skip, 
  });
}




export async function getFounders(): Promise<Founder[]> {
  const founders = await prisma.founder.findMany({
    include: {
      startup: {
        select: {
          id: true,
          name: true,
          logosrc: true,
        },
      },
    },
  });

  return founders;
}

export async function getPersons(filters?: {
  roles?: string[];
}): Promise<Persons[]> {
  return await prisma.person.findMany({
    where: {
      role: filters?.roles?.length ? { in: filters.roles } : undefined,
    },
  });
}





export async function getRandomPeople(limit: number = 3) {
  noStore();

  const total = await prisma.person.count();
  const skip = Math.floor(Math.random() * Math.max(0, total - limit));

  return prisma.person.findMany({
    orderBy: { id: 'asc' },
    take: limit,
    skip: skip,
  });
}



export async function getVentures(): Promise<Ventures[]> {
  const ventures = await prisma.venture.findMany();

  return ventures;
}


export async function getRandomVentures(limit: number = 3) {
  noStore();

  const totalVentures = await prisma.venture.count();

  const skip = Math.floor(
    Math.random() * Math.max(0, totalVentures - limit)
  );
  return prisma.venture.findMany({
    take: limit,
    skip,
 
  });
}






