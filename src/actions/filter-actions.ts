"use server";

import { prisma } from "@/lib/prisma";

export const GetStartupsByFilter = async (filters: { typeName?: string }) => {
  try {
    const startupFilter = await prisma.startup.findMany({
      where: {
        typeName: filters.typeName ? {
          equals: filters.typeName,
          mode: 'insensitive' // Esto hace que la búsqueda no sea sensible a mayúsculas/minúsculas
        } : undefined
      },
    });

    return {
      startupFilter,
    };
  } catch (error) {
    console.error(error);
    throw new Error("No se encontraron startups");
  }
};