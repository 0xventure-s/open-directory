"use server";

import { prisma } from "@/lib/prisma";
import { Startup, Persons, Ventures, Founder } from "@/interface";

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
export async function getVentures(): Promise<Ventures[]> {
  const ventures = await prisma.venture.findMany();

  return ventures;
}

// Función para obtener un startup específico por ID
export async function getStartupById(id: string): Promise<Startup | null> {
  const startup = await prisma.startup.findUnique({
    where: { id },
    include: {
      founders: true,
    },
  });

  return startup;
}

// Función para obtener una persona específica por ID
export async function getPersonById(id: string): Promise<Persons | null> {
  const person = await prisma.person.findUnique({
    where: { id },
  });

  return person;
}

// Función para obtener un venture específico por ID
export async function getVentureById(id: string): Promise<Ventures | null> {
  const venture = await prisma.venture.findUnique({
    where: { id },
  });

  return venture;
}
