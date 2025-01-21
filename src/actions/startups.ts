"use server";

import { prisma } from "@/lib/prisma";
import { Startup, Persons, Ventures, Founder } from "@/interface";

export async function getStartups(): Promise<Startup[]> {
  const startups = await prisma.startup.findMany({
    include: {
      founders: {
        select: {
          id: true,
          name: true,
          image: true,
          linkFounder: true, // Selección explícita
          startupId: true,
        },
      },
    },
  });

  return startups;
}

export async function getFounders(): Promise<Founder[]> {
  const founders = await prisma.founder.findMany({
    include: {
      startup: {
        select: {
          id: true,
          name: true,
          logosrc: true,
          // Agrega otros campos necesarios
        },
      },
    },
  });

  return founders;
}

export async function getPersons(): Promise<Persons[]> {
  const persons = await prisma.person.findMany();

  return persons;
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
