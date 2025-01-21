"use server";

import { prisma } from "@/lib/prisma";




export const GetStartupsByFilter = async (typeName: string ) => {
  try {
    const startupFilter = await prisma.startup.findMany({
      where: {
        typeName: typeName
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

console.log(GetStartupsByFilter);
