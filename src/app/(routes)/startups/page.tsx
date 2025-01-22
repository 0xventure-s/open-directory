import { getStartups } from "@/actions/startups";
import { Button } from "@/components/ui/button";
import { FilterBar } from "@/components/ui/filterBar/Filters";
import StartupGrid from "@/components/ui/gridElements/StartupGrid";
import { Startup } from "@/interface";
import Link from "next/link";


export default async function StartupPage({
  searchParams,
}: {
  searchParams?: { marketType?: string | string[] };
}) {
  // Convertir a array si es necesario
  const marketTypes = Array.isArray(searchParams?.marketType)
    ? searchParams.marketType
    : searchParams?.marketType
    ? [searchParams.marketType]
    : undefined;

  const startups: Startup[] = await getStartups({ marketType: marketTypes });

  return (
    <main className="flex-1 p-4 overflow-y-auto md:p-6 lg:p-8">
      <div className="space-y-4 md:space-y-6">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-bold">
              Startups Argentinas
            </h2>
            <Button variant="outline" className="border-blue-200" asChild>
              <Link href="https://www.google.com">+ Agregar Startups</Link>
            </Button>
          </div>

          {/* Componente de Filtros */}
          <FilterBar />

          {/* Resultados y manejo de estado vacío */}
          {startups.length > 0 ? (
            <div className="mt-4">
              <StartupGrid startups={startups} />
            </div>
          ) : (
            <div className="mt-8 text-center text-muted-foreground">
              No se encontraron startups con los filtros seleccionados
            </div>
          )}
        </section>
      </div>
    </main>
  );
}